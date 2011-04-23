// ==========================================================================
// Project:   TemplateIntegrationExample - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals TemplateIntegrationExample */

// This page describes the main user interface for your application.  
TemplateIntegrationExample.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'scrollView'.w(),
    
    scrollView: SC.ScrollView.design({
      layout: { centerX: 0, centerY: 0, width: 400, height: 700 },

      contentView: SC.StackedView.design({
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
        ],

        exampleView: SC.TemplateView.design({
          templateName: 'item'
        })
      })
    })
  })

});
