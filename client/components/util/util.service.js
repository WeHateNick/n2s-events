'use strict';

import angular from 'angular';

/**
 * The Util service is for thin, globally reusable, utility functions
 */
export function UtilService($window, $mdDialog) {
  'ngInject';

  var Util = {
    /**
     * Return a callback or noop function
     *
     * @param  {Function|*} cb - a 'potential' function
     * @return {Function}
     */
    safeCb(cb) {
      return angular.isFunction(cb) ? cb : angular.noop;
    },

    /**
     * Parse a given url with the use of an anchor element
     *
     * @param  {String} url - the url to parse
     * @return {Object}     - the parsed url, anchor element
     */
    urlParse(url) {
      var a = document.createElement('a');
      a.href = url;

      // Special treatment for IE, see http://stackoverflow.com/a/13405933 for details
      if(a.host === '') {
        a.href = a.href;
      }

      return a;
    },

    /**
     * Test whether or not a given url is same origin
     *
     * @param  {String}           url       - url to test
     * @param  {String|String[]}  [origins] - additional origins to test against
     * @return {Boolean}                    - true if url is same origin
     */
    isSameOrigin(url, origins) {
      url = Util.urlParse(url);
      origins = origins && [].concat(origins) || [];
      origins = origins.map(Util.urlParse);
      origins.push($window.location);
      origins = origins.filter(function(o) {
        let hostnameCheck = url.hostname === o.hostname;
        let protocolCheck = url.protocol === o.protocol;
        // 2nd part of the special treatment for IE fix (see above):
        // This part is when using well-known ports 80 or 443 with IE,
        // when $window.location.port==='' instead of the real port number.
        // Probably the same cause as this IE bug: https://goo.gl/J9hRta
        let portCheck = url.port === o.port || o.port === '' && (url.port === '80' || url.port ===
          '443');
        return hostnameCheck && protocolCheck && portCheck;
      });
      return origins.length >= 1;
    },

    
    states: [{
        'name': 'Alabama',
        'abbreviation': 'AL'
      }, {
        'name': 'Alaska',
        'abbreviation': 'AK'
      }, {
        'name': 'American Samoa',
        'abbreviation': 'AS'
      }, {
        'name': 'Arizona',
        'abbreviation': 'AZ'
      }, {
        'name': 'Arkansas',
        'abbreviation': 'AR'
      }, {
        'name': 'California',
        'abbreviation': 'CA'
      }, {
        'name': 'Colorado',
        'abbreviation': 'CO'
      }, {
        'name': 'Connecticut',
        'abbreviation': 'CT'
      }, {
        'name': 'Delaware',
        'abbreviation': 'DE'
      }, {
        'name': 'District Of Columbia',
        'abbreviation': 'DC'
      }, {
        'name': 'Federated States Of Micronesia',
        'abbreviation': 'FM'
      }, {
        'name': 'Florida',
        'abbreviation': 'FL'
      }, {
        'name': 'Georgia',
        'abbreviation': 'GA'
      }, {
        'name': 'Guam',
        'abbreviation': 'GU'
      }, {
        'name': 'Hawaii',
        'abbreviation': 'HI'
      }, {
        'name': 'Idaho',
        'abbreviation': 'ID'
      }, {
        'name': 'Illinois',
        'abbreviation': 'IL'
      }, {
        'name': 'Indiana',
        'abbreviation': 'IN'
      }, {
        'name': 'Iowa',
        'abbreviation': 'IA'
      }, {
        'name': 'Kansas',
        'abbreviation': 'KS'
      }, {
        'name': 'Kentucky',
        'abbreviation': 'KY'
      }, {
        'name': 'Louisiana',
        'abbreviation': 'LA'
      }, {
        'name': 'Maine',
        'abbreviation': 'ME'
      }, {
        'name': 'Marshall Islands',
        'abbreviation': 'MH'
      }, {
        'name': 'Maryland',
        'abbreviation': 'MD'
      }, {
        'name': 'Massachusetts',
        'abbreviation': 'MA'
      }, {
        'name': 'Michigan',
        'abbreviation': 'MI'
      }, {
        'name': 'Minnesota',
        'abbreviation': 'MN'
      }, {
        'name': 'Mississippi',
        'abbreviation': 'MS'
      }, {
        'name': 'Missouri',
        'abbreviation': 'MO'
      }, {
        'name': 'Montana',
        'abbreviation': 'MT'
      }, {
        'name': 'Nebraska',
        'abbreviation': 'NE'
      }, {
        'name': 'Nevada',
        'abbreviation': 'NV'
      }, {
        'name': 'New Hampshire',
        'abbreviation': 'NH'
      }, {
        'name': 'New Jersey',
        'abbreviation': 'NJ'
      }, {
        'name': 'New Mexico',
        'abbreviation': 'NM'
      }, {
        'name': 'New York',
        'abbreviation': 'NY'
      }, {
        'name': 'North Carolina',
        'abbreviation': 'NC'
      }, {
        'name': 'North Dakota',
        'abbreviation': 'ND'
      }, {
        'name': 'Northern Mariana Islands',
        'abbreviation': 'MP'
      }, {
        'name': 'Ohio',
        'abbreviation': 'OH'
      }, {
        'name': 'Oklahoma',
        'abbreviation': 'OK'
      }, {
        'name': 'Oregon',
        'abbreviation': 'OR'
      }, {
        'name': 'Palau',
        'abbreviation': 'PW'
      }, {
        'name': 'Pennsylvania',
        'abbreviation': 'PA'
      }, {
        'name': 'Puerto Rico',
        'abbreviation': 'PR'
      }, {
        'name': 'Rhode Island',
        'abbreviation': 'RI'
      }, {
        'name': 'South Carolina',
        'abbreviation': 'SC'
      }, {
        'name': 'South Dakota',
        'abbreviation': 'SD'
      }, {
        'name': 'Tennessee',
        'abbreviation': 'TN'
      }, {
        'name': 'Texas',
        'abbreviation': 'TX'
      }, {
        'name': 'Utah',
        'abbreviation': 'UT'
      }, {
        'name': 'Vermont',
        'abbreviation': 'VT'
      }, {
        'name': 'Virgin Islands',
        'abbreviation': 'VI'
      }, {
        'name': 'Virginia',
        'abbreviation': 'VA'
      }, {
        'name': 'Washington',
        'abbreviation': 'WA'
      }, {
        'name': 'West Virginia',
        'abbreviation': 'WV'
      }, {
        'name': 'Wisconsin',
        'abbreviation': 'WI'
      }, {
        'name': 'Wyoming',
        'abbreviation': 'WY'
      },
    ],
    

    showErrorDialog: (customMessage, includeSupportLink) => {
      let message = 'An internal server error occurred.';
      if (customMessage) {
        message = customMessage;
      }
      if (includeSupportLink !== false) {
        message += 'Please try again or <a href="http://need2speed.com/contact/">contact Need 2 Speed support</a>.';        
      }
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Something went wrong')
          .htmlContent('<p>' + message + '</p>')
          .ariaLabel('Internal server error')
          .ok('Close')
          .targetEvent(event)
      );
    },

    newState: {
      data: {},
      loading: false,
      error: false,
      success: false
    }

  };

  return Util;
}
