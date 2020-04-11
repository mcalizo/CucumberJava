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
  "duration": 18644155800,
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
  "duration": 3464975700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3201043800,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3180872600,
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
  "duration": 44576400,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_proceeded_to_place_order_page()"
});
formatter.result({
  "duration": 5153425500,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.verify_that_the_vegetables_are_successfully_purchased()"
});
formatter.result({
  "duration": 10354523400,
  "status": "passed"
});
formatter.after({
  "duration": 152526400,
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
  "duration": 17123418200,
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
  "duration": 3312852700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3189533300,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3175757200,
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
  "duration": 43707500,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_proceeded_to_place_order_page()"
});
formatter.result({
  "duration": 5156102900,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.verify_that_the_vegetables_are_successfully_purchased()"
});
formatter.result({
  "duration": 10328985100,
  "status": "passed"
});
formatter.after({
  "duration": 144784200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Inputting invalid code in place order",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;inputting-invalid-code-in-place-order",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User search for \u003cName\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify selected \u003cName\u003e items are displayed in checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters an invalid code then click apply",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Error message will show up",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;inputting-invalid-code-in-place-order;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 29,
      "id": "purchasing-items-from-search-to-place-order;inputting-invalid-code-in-place-order;;1"
    },
    {
      "cells": [
        "Tomato"
      ],
      "line": 30,
      "id": "purchasing-items-from-search-to-place-order;inputting-invalid-code-in-place-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Inputting invalid code in place order",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;inputting-invalid-code-in-place-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User search for Tomato Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify selected Tomato items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters an invalid code then click apply",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Error message will show up",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 17355795200,
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
  "duration": 3345844800,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3187554100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3162063700,
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
  "duration": 30481400,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_enters_an_invalid_code_then_click_apply()"
});
formatter.result({
  "duration": 5181125800,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.error_message_will_show_up()"
});
formatter.result({
  "duration": 83050300,
  "status": "passed"
});
formatter.after({
  "duration": 113155500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Forgot to enter the promotion code",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;forgot-to-enter-the-promotion-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Test9"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User search for Cucumber Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User clicks apply without promo code",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User will get notify to enter a code",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16631370300,
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
  "duration": 3378186500,
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
  "duration": 3048966000,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3203441500,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3161128200,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_clicks_apply_without_promo_code()"
});
formatter.result({
  "duration": 5090520200,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_will_get_notify_to_enter_a_code()"
});
formatter.result({
  "duration": 80919600,
  "status": "passed"
});
formatter.after({
  "duration": 125802700,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Data tables scenario",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;data-tables-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Test10"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User search for an items",
  "rows": [
    {
      "cells": [
        "Corn",
        "Onion"
      ],
      "line": 47
    },
    {
      "cells": [
        "Orange",
        "Pista"
      ],
      "line": 48
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Results will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16700586300,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_search_for_an_items(DataTable)"
});
formatter.result({
  "duration": 189586200,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.results_will_displayed()"
});
formatter.result({
  "duration": 68729700,
  "status": "passed"
});
formatter.after({
  "duration": 83348900,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@Test11"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "User is on the application Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User search for Cucumber Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User click the proceed button without clicking the agreement",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User will see the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16733221000,
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
  "duration": 3307510500,
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
  "duration": 3059089100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3203391900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3152939200,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_click_the_proceed_button_without_clicking_the_agreement()"
});
formatter.result({
  "duration": 3209691000,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_will_see_the_error_message_is_displayed()"
});
formatter.result({
  "duration": 113305200,
  "status": "passed"
});
formatter.after({
  "duration": 76700300,
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
  "duration": 17457508300,
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
  "duration": 3351585800,
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
  "duration": 3048137600,
  "status": "passed"
});
formatter.after({
  "duration": 101256200,
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
  "duration": 16743010100,
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
  "duration": 3329355900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3202020200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3164473400,
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
  "duration": 30619600,
  "status": "passed"
});
formatter.after({
  "duration": 104100000,
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
  "duration": 16769659600,
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
  "duration": 3331196400,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3187599800,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3163438500,
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
  "duration": 39709400,
  "status": "passed"
});
formatter.after({
  "duration": 83821500,
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
  "duration": 16895607100,
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
  "duration": 3296655600,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3184298100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3147901300,
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
  "duration": 65841500,
  "status": "passed"
});
formatter.after({
  "duration": 103593600,
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
  "duration": 17109589200,
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
  "duration": 3327393100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3207747900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3154253000,
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
  "duration": 28683800,
  "status": "passed"
});
formatter.after({
  "duration": 100763200,
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
  "duration": 17859258900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_click_the_cart()"
});
formatter.result({
  "duration": 3109905400,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.verify_the_cart_is_empty()"
});
formatter.result({
  "duration": 62781800,
  "status": "passed"
});
formatter.after({
  "duration": 100433800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Accessing the Top deals",
  "description": "",
  "id": "search-and-place-order;accessing-the-top-deals",
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
  "duration": 17026420800,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_clicks_the_top_deals()"
});
formatter.result({
  "duration": 14961465200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_go_back_to_the_greenkart_homepage()"
});
formatter.result({
  "duration": 3035065400,
  "status": "passed"
});
formatter.after({
  "duration": 99912300,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Accessing the child window",
  "description": "",
  "id": "search-and-place-order;accessing-the-child-window",
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
formatter.match({
  "location": "SearchDefination.user_is_on_the_application_landing_page()"
});
formatter.result({
  "duration": 16658367400,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_clicks_the_flight_booking_link()"
});
formatter.result({
  "duration": 11748538600,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_go_back_to_the_greenkart_homepage()"
});
formatter.result({
  "duration": 3047119800,
  "status": "passed"
});
formatter.after({
  "duration": 125726200,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Comparing the value of the items to the total value",
  "description": "",
  "id": "search-and-place-order;comparing-the-value-of-the-items-to-the-total-value",
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
  "name": "User search for \"Corn\" to purchase",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Search for \"Banana\" to purchase",
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
  "duration": 16950652700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Corn",
      "offset": 17
    }
  ],
  "location": "SearchDefination.user_search_for_something_to_purchase(String)"
});
formatter.result({
  "duration": 6450131300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 12
    }
  ],
  "location": "SearchDefination.search_for_something_to_purchase(String)"
});
formatter.result({
  "duration": 8742915200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceed_to_purchase_the_items()"
});
formatter.result({
  "duration": 8213806000,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.the_items_are_displayed_in_checkout_page()"
});
formatter.result({
  "duration": 10431028300,
  "status": "passed"
});
formatter.after({
  "duration": 4142018000,
  "status": "passed"
});
});