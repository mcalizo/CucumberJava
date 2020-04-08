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
  "duration": 20046986800,
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
  "duration": 3566418200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3515902900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3270160100,
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
  "duration": 54068000,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_proceeded_to_place_order_page()"
});
formatter.result({
  "duration": 5319336000,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.verify_that_the_vegetables_are_successfully_purchased()"
});
formatter.result({
  "duration": 10653729700,
  "status": "passed"
});
formatter.after({
  "duration": 251803700,
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
  "duration": 19069908100,
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
  "duration": 3405454700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3288602000,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3250962700,
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
  "duration": 70949300,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_proceeded_to_place_order_page()"
});
formatter.result({
  "duration": 5313906000,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.verify_that_the_vegetables_are_successfully_purchased()"
});
formatter.result({
  "duration": 10677209900,
  "status": "passed"
});
formatter.after({
  "duration": 4294963400,
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
  "duration": 17299013100,
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
  "duration": 3447000400,
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
  "duration": 3078556000,
  "status": "passed"
});
formatter.after({
  "duration": 191573600,
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
  "duration": 17279436600,
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
  "duration": 3642322900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3485862900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3400466900,
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
  "duration": 82173800,
  "status": "passed"
});
formatter.after({
  "duration": 172142900,
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
  "duration": 17456872500,
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
  "duration": 3777082300,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3555078100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3390770600,
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
  "duration": 74147700,
  "status": "passed"
});
formatter.after({
  "duration": 124820100,
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
  "duration": 17229104600,
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
  "duration": 3538482200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3488936000,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3391272400,
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
  "duration": 79290200,
  "status": "passed"
});
formatter.after({
  "duration": 172378500,
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
  "duration": 18317376200,
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
  "duration": 3569465000,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3464644500,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3420925800,
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
  "duration": 76095900,
  "status": "passed"
});
formatter.after({
  "duration": 182787000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User proceed to cart without purchasing an items",
  "description": "",
  "id": "search-and-place-order;user-proceed-to-cart-without-purchasing-an-items",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User click the cart",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "verify the cart is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 17527076700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_click_the_cart()"
});
formatter.result({
  "duration": 188605500,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.verify_the_cart_is_empty()"
});
formatter.result({
  "duration": 132361900,
  "status": "passed"
});
formatter.after({
  "duration": 118317100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "",
  "id": "search-and-place-order;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User clicks the Top deals",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User go back to the greenkart homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 17284401700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_clicks_the_top_deals()"
});
formatter.result({
  "duration": 14796382100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_go_back_to_the_greenkart_homepage()"
});
formatter.result({
  "duration": 81886500,
  "status": "passed"
});
formatter.after({
  "duration": 208991000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "",
  "description": "",
  "id": "search-and-place-order;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User clicks the flight booking link",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User go back to the greenkart homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 17535554700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_clicks_the_flight_booking_link()"
});
formatter.result({
  "duration": 11441524900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_go_back_to_the_greenkart_homepage()"
});
formatter.result({
  "duration": 87065700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3725479100,
  "status": "passed"
});
formatter.after({
  "duration": 166546000,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "",
  "description": "",
  "id": "search-and-place-order;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User search for \"Orange\" to purchase",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Search for \"Pista\" to purchase",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User proceed to purchase the items",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "The items are displayed in checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 17563103700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "SearchDefination.user_search_for_something_to_purchase(String)"
});
formatter.result({
  "duration": 6813916300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pista",
      "offset": 12
    }
  ],
  "location": "SearchDefination.search_for_something_to_purchase(String)"
});
formatter.result({
  "duration": 10216419200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceed_to_purchase_the_items()"
});
formatter.result({
  "duration": 18843642700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.the_items_are_displayed_in_checkout_page()"
});
formatter.result({
  "duration": 69800,
  "status": "passed"
});
formatter.after({
  "duration": 232447700,
  "status": "passed"
});
});