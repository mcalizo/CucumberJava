$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PlaceOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Purchasing Items from Search to Place order",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Proceed to placing order page",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;proceed-to-placing-order-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for \u003cName\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify selected \u003cName\u003e items are displayed in checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User proceeded to place order page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify that the vegetables are successfully purchased",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;proceed-to-placing-order-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 14,
      "id": "purchasing-items-from-search-to-place-order;proceed-to-placing-order-page;;1"
    },
    {
      "cells": [
        "Almonds"
      ],
      "line": 15,
      "id": "purchasing-items-from-search-to-place-order;proceed-to-placing-order-page;;2"
    },
    {
      "cells": [
        "Walnuts"
      ],
      "line": 16,
      "id": "purchasing-items-from-search-to-place-order;proceed-to-placing-order-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Proceed to placing order page",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;proceed-to-placing-order-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for Almonds Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify selected Almonds items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User proceeded to place order page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify that the vegetables are successfully purchased",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 17438193700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Almonds",
      "offset": 16
    }
  ],
  "location": "SearchDefination.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3256255600,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3191119800,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3161519200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Almonds",
      "offset": 16
    }
  ],
  "location": "SearchDefination.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 46613600,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_proceeded_to_place_order_page()"
});
formatter.result({
  "duration": 5147169700,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.verify_that_the_vegetables_are_successfully_purchased()"
});
formatter.result({
  "duration": 10339013700,
  "status": "passed"
});
formatter.after({
  "duration": 4317902500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Proceed to placing order page",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;proceed-to-placing-order-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for Walnuts Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify selected Walnuts items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User proceeded to place order page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify that the vegetables are successfully purchased",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16226733300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walnuts",
      "offset": 16
    }
  ],
  "location": "SearchDefination.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3209365300,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3151031700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3160606200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walnuts",
      "offset": 16
    }
  ],
  "location": "SearchDefination.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 44179400,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_proceeded_to_place_order_page()"
});
formatter.result({
  "duration": 5142818800,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.verify_that_the_vegetables_are_successfully_purchased()"
});
formatter.result({
  "duration": 10344145100,
  "status": "passed"
});
formatter.after({
  "duration": 144715800,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and Place order",
  "description": "",
  "id": "search-and-place-order",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search items and validate results",
  "description": "",
  "id": "search-and-place-order;search-items-and-validate-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for Cucumber Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16324137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 16
    }
  ],
  "location": "SearchDefination.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3217957300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "SearchDefination.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 3049355500,
  "status": "passed"
});
formatter.after({
  "duration": 79701600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User search for \u003cName\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected \u003cName\u003e items are displayed in checkout page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 18,
      "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 19,
      "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 20,
      "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;3"
    },
    {
      "cells": [
        "Tomato"
      ],
      "line": 21,
      "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;4"
    },
    {
      "cells": [
        "Orange"
      ],
      "line": 22,
      "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User search for Brinjal Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Brinjal items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16320720100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "SearchDefination.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3215623400,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3144945300,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3161261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "SearchDefination.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 23449200,
  "status": "passed"
});
formatter.after({
  "duration": 69242100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User search for Beetroot Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Beetroot items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16186588000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "SearchDefination.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3223289100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3173328200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3129014800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "SearchDefination.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 26508400,
  "status": "passed"
});
formatter.after({
  "duration": 66178100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User search for Tomato Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Tomato items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16280924100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato",
      "offset": 16
    }
  ],
  "location": "SearchDefination.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3199069600,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3164980800,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3134502200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato",
      "offset": 16
    }
  ],
  "location": "SearchDefination.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 26271800,
  "status": "passed"
});
formatter.after({
  "duration": 66445800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order;search-for-items-and-then-move-to-checkout-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User search for Orange Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Orange items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16110143600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 16
    }
  ],
  "location": "SearchDefination.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3213172900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3152235300,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3150931000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 16
    }
  ],
  "location": "SearchDefination.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 47135700,
  "status": "passed"
});
formatter.after({
  "duration": 67180200,
  "status": "passed"
});
});