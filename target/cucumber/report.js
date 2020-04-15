$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and Place order",
  "description": "",
  "id": "search-and-place-order",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 59,
  "name": "Sorting the vegetables in topdeals page",
  "description": "",
  "id": "search-and-place-order;sorting-the-vegetables-in-topdeals-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@Test13"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "User access the Top deals",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "display the vegetables in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 19637900500,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_access_the_top_deals()"
});
formatter.result({
  "duration": 277366700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.display_the_vegetables_in_the_results()"
});
formatter.result({
  "duration": 4273874200,
  "status": "passed"
});
formatter.after({
  "duration": 817169500,
  "status": "passed"
});
});