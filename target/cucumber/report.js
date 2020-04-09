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
  "duration": 17841840900,
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
  "duration": 3364529900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3171512000,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3159351900,
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
  "duration": 47175400,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_proceeded_to_place_order_page()"
});
formatter.result({
  "duration": 5135932200,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.verify_that_the_vegetables_are_successfully_purchased()"
});
formatter.result({
  "duration": 10310607200,
  "status": "passed"
});
formatter.after({
  "duration": 133457100,
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
  "duration": 16172382200,
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
  "duration": 3239157100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3160988400,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3164028500,
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
  "duration": 54084000,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_proceeded_to_place_order_page()"
});
formatter.result({
  "duration": 5110703200,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.verify_that_the_vegetables_are_successfully_purchased()"
});
formatter.result({
  "duration": 10302271600,
  "status": "passed"
});
formatter.after({
  "duration": 4123413300,
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
  "duration": 16616436600,
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
  "duration": 3232412000,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3166327800,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3147737500,
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
  "duration": 26723500,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_enters_an_invalid_code_then_click_apply()"
});
formatter.result({
  "duration": 5129408500,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.error_message_will_show_up()"
});
formatter.result({
  "duration": 53088100,
  "status": "passed"
});
formatter.after({
  "duration": 68259100,
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
  "duration": 17210394000,
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
  "duration": 3300881100,
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
  "duration": 3029018700,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3186475600,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3163762000,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_clicks_apply_without_promo_code()"
});
formatter.result({
  "duration": 5069761300,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_will_get_notify_to_enter_a_code()"
});
formatter.result({
  "duration": 63743900,
  "status": "passed"
});
formatter.after({
  "duration": 73214600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Datatables scenario",
  "description": "",
  "id": "purchasing-items-from-search-to-place-order;datatables-scenario",
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
  "duration": 17036243300,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.user_search_for_an_items(DataTable)"
});
formatter.result({
  "duration": 188760100,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderDefination.results_will_displayed()"
});
formatter.result({
  "duration": 46000800,
  "status": "passed"
});
formatter.after({
  "duration": 63097000,
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
  "duration": 16449822800,
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
  "duration": 3312424300,
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
  "duration": 3032707800,
  "status": "passed"
});
formatter.after({
  "duration": 81900400,
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
  "duration": 16396861500,
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
  "duration": 3283364800,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3181665900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3157304300,
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
  "duration": 49009100,
  "status": "passed"
});
formatter.after({
  "duration": 71883900,
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
  "duration": 16549177200,
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
  "duration": 3323768000,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3187407100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3170125400,
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
  "duration": 45315500,
  "status": "passed"
});
formatter.after({
  "duration": 88823000,
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
  "duration": 16484909700,
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
  "duration": 3270624400,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3177885100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3170634100,
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
  "duration": 42637500,
  "status": "passed"
});
formatter.after({
  "duration": 82559100,
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
  "duration": 16454708900,
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
  "duration": 3257091600,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 3186152200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 3164402800,
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
  "duration": 39056100,
  "status": "passed"
});
formatter.after({
  "duration": 80966000,
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
  "duration": 16988209200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_click_the_cart()"
});
formatter.result({
  "duration": 116607400,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.verify_the_cart_is_empty()"
});
formatter.result({
  "duration": 82007300,
  "status": "passed"
});
formatter.after({
  "duration": 84588800,
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
  "duration": 16740194200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_clicks_the_top_deals()"
});
formatter.result({
  "duration": 14656312100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_go_back_to_the_greenkart_homepage()"
});
formatter.result({
  "duration": 3041102900,
  "status": "passed"
});
formatter.after({
  "duration": 77748500,
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
  "duration": 16592502900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_clicks_the_flight_booking_link()"
});
formatter.result({
  "duration": 11480977600,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_go_back_to_the_greenkart_homepage()"
});
formatter.result({
  "duration": 3044314500,
  "status": "passed"
});
formatter.after({
  "duration": 79390900,
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
  "duration": 16320500100,
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
  "duration": 6388965700,
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
  "duration": 11571734400,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.user_proceed_to_purchase_the_items()"
});
formatter.result({
  "duration": 8155522200,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefination.the_items_are_displayed_in_checkout_page()"
});
formatter.result({
  "duration": 10361736500,
  "status": "passed"
});
formatter.after({
  "duration": 4078339900,
  "status": "passed"
});
});