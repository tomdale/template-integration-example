TemplateIntegrationExample.contentController = SC.ArrayController.create({
  content: [
    SC.Object.create({
      name: "Tim",
      location: "the Ozarks"
    }),

    SC.Object.create({
      name: "Tom",
      location: "San Francisco"
    }),

    SC.Object.create({
      name: "Al Gore",
      location: "The Internet"
    })
  ]
});

