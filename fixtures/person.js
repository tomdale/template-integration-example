// ==========================================================================
// Project:   TemplateIntegrationExample.Person Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals TemplateIntegrationExample */

sc_require('models/person');

TemplateIntegrationExample.Person.FIXTURES = [
  {
    guid: 1,
    name: "Tim",
    location: "the Ozarks"
  },

  {
    guid: 2,
    name: "Tom",
    location: "San Francisco"
  },

  {
    guid: 3,
    name: "Al Gore",
    location: "The Internet"
  }


  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },
  //
  // { guid: 2,
  //   firstName: "Dwight",
  //   lastName: "Schrute" },
  //
  // { guid: 3,
  //   firstName: "Jim",
  //   lastName: "Halpert" },
  //
  // { guid: 4,
  //   firstName: "Pam",
  //   lastName: "Beesly" },
  //
  // { guid: 5,
  //   firstName: "Ryan",
  //   lastName: "Howard" }

];
