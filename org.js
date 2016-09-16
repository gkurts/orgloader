import * as faker from 'faker';
import * as fecha from 'fecha';

export function createOrg (bureauCode, bid) {
  var org =
  {
    'meta': {
      'CreatedTimestamp': fecha.format(Date.now(), "MM/DD/YYYY H:mm:ss"),
      'NumberOfEntities': '1',
      'TransactionType': 'create',
      'MessageId': faker.random.number(),
      'SenderId': 'apidev',
      'SourceBusinessId': bid,
      'BureauCode': bureauCode,
      'EntityIds': [
        bid
      ],
      'EntityType': 'organization'
    },
    'data': [
      {
        'PublishTo': ['API','Search'],
        'IsReportable': faker.random.boolean(),
        'BureauOrganizationTypeID': 1101,
        'BureauCode': bureauCode,
        'ReportURL': faker.internet.url(),
        'SourceBusinessId': bid,
        'AccreditationStatus': null,
        'MemberType': 'Accredited',
        'RatingGrade': faker.random.arrayElement(['A', 'B', 'C', 'D', 'F']),
        'RatingScore': faker.random.number({min: 0, max: 100}),
        'IndustryTypeId': 5,
        'IsClaimed': faker.random.boolean(),
        'BBBAccreditationDate': fecha.format(faker.date.past(), 'YYYY-MM-DD'),
        'BBBRevocationDate': fecha.format(faker.date.past(), 'YYYY-MM-DD'),
        'StarRatingScore': faker.random.arrayElement(['1', '2', '3', '4', '5']),
        'IsBBBAccredited': faker.random.boolean(),
        'LogoImageId': null,
        'MastheadImageId': null,
        'IsBillable': faker.random.boolean(),
        'TotalPositive': faker.random.number({min: 0, max:300}),
        'TotalNegative': faker.random.number({min: 0, max:300}),
        'TotalNeutral': faker.random.number({min: 0, max:300}),
        'OrganizationStartDate': fecha.format(faker.date.past(), 'YYYY-MM-DD'),
        'OrganizationLocalStartDate': fecha.format(faker.date.past(), 'YYYY-MM-DD'),
        'OrganizationCloseDate': fecha.format(faker.date.past(), 'YYYY-MM-DD'),
        'NumEmployees': faker.random.number({min:1, max:1000}),
        'OrganizationSizeTypeId': 1303,
        'IsABEligible': faker.random.boolean(),
        'ReportTypeId': 3603,
        'LegalOrganizationTypeId': 1003,
        'OrganizationDescription': faker.lorem.sentence(),
        'ServingArea': faker.address.city(),
        'ServingAreaZipcodes': faker.address.zipCode(),
        'IncorporationStateCode': faker.address.stateAbbr(),
        'IncorporationCountryCode': 'USA',
        'Notes': faker.lorem.sentence(),
        'IncorporationDate': fecha.format(faker.date.past(), 'YYYY-MM-DD'),
        'LicenseStatusTypeId': 3904,
        'GrossRevenue': faker.random.number({min: 1000, max:5000000}),
        'NumCustomers': faker.random.number({min: 0, max: 999999}),
        'IsDeemedUntrustworthy': faker.random.boolean(),
        'IsBankrupt': faker.random.boolean(),
        'IsOutOfBusiness': faker.random.boolean(),
        'IsBeingReviewedorUpdated': null,
        'IsRequestAQuoteActive': faker.random.boolean(),
        'Statistics': {
          'BureauCode': bureauCode,
          'SourceBusinessId': bid,
          'TotalCustomerReviews': faker.random.number({min: 100, max: 300}),
          'Total5StarReviews': 45,
          'Total4StarReviews': 10,
          'Total3StarReviews': 15,
          'Total2StarReviews': 10,
          'Total1StarReviews': 20,
          'TotalComplaints': 24
        },
        'Addresses': [
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAddressId': '1',
            'AddressLine1': faker.address.streetAddress(),
            'AddressLine2': faker.address.secondaryAddress(),
            'City': faker.address.city(),
            'StateCode': faker.address.stateAbbr(),
            'PostalCode': faker.address.zipCode(),
            'CountryCode': 'USA',
            'AddressTypeId': 101,
            'IsPrimary': faker.random.boolean(),
            'Latitude': faker.random.number({min: 0, max: 90}),
            'Longitude': faker.random.number({min: -180, max: 0}),
            'HoursOfOperation': 'Sun: 10-4|Mon-Thu: 9-6|Sat,Sun:10-5',
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAddressId': '2',
            'AddressLine1': faker.address.streetAddress(),
            'AddressLine2': faker.address.secondaryAddress(),
            'City': faker.address.city(),
            'StateCode': faker.address.stateAbbr(),
            'PostalCode': faker.address.zipCode(),
            'CountryCode': 'USA',
            'AddressTypeId': 101,
            'IsPrimary': faker.random.boolean(),
            'Latitude': faker.random.number({min: 0, max: 90}),
            'Longitude': faker.random.number({min: -180, max: 0}),
            'HoursOfOperation': 'Sun: 10-4|Mon-Thu: 9-6|Sat,Sun:10-5',
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAddressId': '3',
            'AddressLine1': faker.address.streetAddress(),
            'AddressLine2': faker.address.secondaryAddress(),
            'City': faker.address.city(),
            'StateCode': faker.address.stateAbbr(),
            'PostalCode': faker.address.zipCode(),
            'CountryCode': 'USA',
            'AddressTypeId': 101,
            'IsPrimary': faker.random.boolean(),
            'Latitude': faker.random.number({min: 0, max: 90}),
            'Longitude': faker.random.number({min: -180, max: 0}),
            'HoursOfOperation': 'Sun: 10-4|Mon-Thu: 9-6|Sat,Sun:10-5',
            'PublishTo': [
              'API',
              'Search'
            ]
          },

        ],
        'Names': [
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceNameId': '1',
            'Name': faker.name.findName(),
            'IsPrimary': faker.random.boolean(),
            'NameTypeId': 1201,
            'PublishTo': [
              'API',
              'Search'
            ]
          }
        ],
        'PaymentMethods': [
          {
            'PaymentMethodTypeId': 3001
          }
        ],
        'Alerts': [
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAlertId': 1,
            'AlertTypeId': 8102,
            'IsOverviewAlert': faker.random.boolean(),
            'AlertTitle': 'Ad Review',
            'AlertText': 'The following text indicates that read more button should be selected or at least available because the text is more than the expected character limit. Limits have been placed to ensure that this text is shortened',
            'ExpireDate': '2015-02-02',
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAlertId': 2,
            'AlertTypeId': 8101,
            'IsOverviewAlert': faker.random.boolean(),
            'AlertTitle': 'Misuse of BBB Name and/or Logo',
            'AlertText': 'The review for this ad is incorrect',
            'ExpireDate': null,
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAlertId': 3,
            'AlertTypeId': 8103,
            'IsOverviewAlert': faker.random.boolean(),
            'AlertTitle': 'Government Actions',
            'AlertText': 'The review for this ad is incorrect',
            'ExpireDate': null,
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAlertId': 4,
            'AlertTypeId': 8104,
            'IsOverviewAlert': faker.random.boolean(),
            'AlertTitle': 'Pattern of Complaints',
            'AlertText': 'The review for this ad is incorrect',
            'ExpireDate': null,
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAlertId': 5,
            'AlertTypeId': 8105,
            'IsOverviewAlert': faker.random.boolean(),
            'AlertTitle': 'Bankruptcy',
            'AlertText': 'The review for this ad is incorrect',
            'ExpireDate': null,
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAlertId': 6,
            'AlertTypeId': 8106,
            'IsOverviewAlert': faker.random.boolean(),
            'AlertTitle': 'Out-of-Business known or suspected',
            'AlertText': 'The review for this ad is incorrect',
            'ExpireDate': null,
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceAlertId': 2,
            'AlertTypeId': 8107,
            'IsOverviewAlert': faker.random.boolean(),
            'AlertTitle': 'Cautionary compnay offer',
            'AlertText': 'The following text indicates that read more button should be selected or at least available because the text is more than the expected character limit. Limits have been placed to ensure that this text is shortened.',
            'ExpireDate': null,
            'PublishTo': [
              'API',
              'Search'
            ]
          }
        ],
        'EmailAddresses': [
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceEmailId': '1',
            'EmailAddress': faker.internet.email(),
            'IsPrimary': faker.random.boolean(),
            'EmailTypeId': 501,
            'PublishTo': [
              'API',
              'Search'
            ]
          }
        ],
        'PhoneNumbers': [
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourcePhoneId': '1',
            'PhoneCountryCode': '1',
            'AreaCode':  faker.random.number({min: 100, max: 999}),
            'PhoneNumber': faker.random.number({min: 1000000, max: 9999999}),
            'Extension': faker.random.number({min: 1000, max: 9999}),
            'IsPrimary': faker.random.boolean(),
            'PhoneTypeId': 301,
            'IsDisconnected': null,
            'PublishTo': [
              'API',
              'Search'
            ]
          }
        ],
        'URLs': [
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceURLId': '1',
            'URL': faker.internet.url(),
            'IsPrimary': faker.random.boolean(),
            'URLTypeId': 701,
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceURLId': '3',
            'URL': faker.internet.url(),
            'IsPrimary': faker.random.boolean(),
            'URLTypeId': 703,
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceURLId': '9',
            'URL': faker.internet.url(),
            'IsPrimary': faker.random.boolean(),
            'URLTypeId': 718,
            'PublishTo': [
              'API',
              'Search'
            ]
          }
        ],
        'Contacts': [
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'SourceContactId': '1',
            'NamePrefix': faker.name.prefix(),
            'LastName': faker.name.lastName(),
            'FirstName': faker.name.firstName(),
            'MiddleName': '',
            'NameSuffix': faker.name.suffix(),
            'Title': faker.name.jobTitle(),
            'Notes': '',
            'IsPrimary': faker.random.boolean(),
            'RoleTypeId': 1604,
            'PublishTo': [
              'API',
              'Search'
            ],
            'FirstKnownAssociationDate': '',
            'LastKnownAssociationDate': '',
            'IsPrincipal': null,
            'Compensation': null
          }
        ],
        'Categories': [
          {
            'CategoryId': '00108-000',
            'CategoryTypeId': 5501,
            'IsPrimary': faker.random.boolean(),
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'CategoryId': '00155-000',
            'CategoryTypeId': 5501,
            'IsPrimary': faker.random.boolean(),
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'CategoryId': '00155-103',
            'CategoryTypeId': 5501,
            'IsPrimary': faker.random.boolean(),
            'PublishTo': [
              'API',
              'Search'
            ]
          },
          {
            'CategoryId': '00157-000',
            'CategoryTypeId': 5501,
            'IsPrimary': faker.random.boolean(),
            'PublishTo': [
              'API',
              'Search'
            ]
          }
        ],
        'BusinessReportCustomText': [
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'CustomTextSectionId': 7101,
            'CustomText': faker.lorem.sentence()
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'CustomTextSectionId': 7109,
            'CustomText': faker.lorem.sentence()
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'CustomTextSectionId': 7110,
            'CustomText': faker.lorem.sentence()
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'CustomTextSectionId': 7111,
            'CustomText': faker.lorem.sentence()
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'CustomTextSectionId': 7112,
            'CustomText': faker.lorem.sentence()
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'CustomTextSectionId': 7113,
            'CustomText': faker.lorem.sentence()
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'CustomTextSectionId': 7118,
            'CustomText': faker.lorem.sentence()
          },
          {
            'BureauCode': bureauCode,
            'SourceBusinessId': bid,
            'CustomTextSectionId': 7119,
            'CustomText': faker.lorem.sentence()
          }
        ]
      }
    ]
};
  return org;
}
