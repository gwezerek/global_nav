stump_speech
===============

**Trello**: 

**Wordpress post**: https://espnfivethirtyeight.wordpress.com/wp-admin/post.php?post=96164&action=edit

**Staging**: http://staging.projects.fivethirtyeight.com.s3-website-us-east-1.amazonaws.com/stump-speech/

**Production**: http://projects.fivethirtyeight.com/stump-speech/

## Switching to the full page layout

#### 1. Switching the template

In `index.jade`, change the layout to `layouts/fullpage`

#### 2. Set up ads and tracking

This doesn't need to happen until close to the publish date. The steps are:

1. Add an entry for this interactive to the [Interactives Spreadsheet](https://docs.google.com/spreadsheets/d/1HBXso8KrggjywZFoSYZW6Ecm1Fs8F7qvbF2uvsIyS14/edit#gid=0)

2. Run `gulp update-pageconfig` to update the local config from the spreadsheet

3. Uncomment `include ../includes/ads_and_tracking.html` in `fullpage.jade`
