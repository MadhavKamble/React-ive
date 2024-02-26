import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * 
 * 
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *     -RestaurantCard
 *          -Img
 *          -NAme of Res, Star Rating, Cuisines,delivery time etc
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbbH4OQQRaGhtW7kyr0u775dqSv7Krn8ffw&usqp=CAU'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard={
    backgroundColor:"#f0f0f0"
}

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} =resData?.info
    const{deliveryTime} = resData?.info.sla
    return(
        <div className='res-card' style={styleCard}>
            <img className='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId} alt='res-logo'/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

const resList=[
        {
          "info": {
            "id": "690202",
            "name": "FreshMenu",
            "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
            "locality": "CHANDU STUDIO COMPOUND",
            "areaName": "Kalina",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Continental",
              "Chinese",
              "Oriental",
              "Asian",
              "Healthy Food",
              "Fast Food",
              "Indian",
              "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "398",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=11443948~p=1~eid=0000018d-e16c-bea4-1412-c5d8008c0114~srvts=1708884016804~45995",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-25 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "EVERY ITEM",
              "subHeader": "@ ₹139"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=690202",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "678577",
            "name": "BOX8 - Desi Meals",
            "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
            "locality": "Gaurav Industrial Estate",
            "areaName": "Kurla West",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Thalis",
              "Home Food"
            ],
            "avgRating": 4.6,
            "parentId": "10655",
            "avgRatingString": "4.6",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "21 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-26 02:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=678577",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "28405",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "CST Road",
            "areaName": "Santacruz East",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "61955",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-26 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=28405",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "32399",
            "name": "McDonald's",
            "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
            "locality": "Kalina Artista",
            "areaName": "Santacruz East",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-26 02:45:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=32399",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "74549",
            "name": "Sahara Restaurant",
            "cloudinaryImageId": "geedkuyt9lobwntf2k3o",
            "locality": "Chembur",
            "areaName": "Chembur",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Indian",
              "Chinese",
              "Tandoor",
              "Mughlai",
              "Biryani",
              "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "12130",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=11456302~p=2~eid=0000018d-e16c-bea4-1412-c5d9008c0234~srvts=1708884016804~45995",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 4.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-25 23:55:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹399",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=74549",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "78036",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Central Plaza, Kalina",
            "areaName": "Santacruz East",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-26 05:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=78036",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "9052",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Central Plaza, Kalina",
            "areaName": "Santacruz East",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "2",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-26 04:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=9052",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
    ]

//not using keys is not acceptabe while using loops in props
//use unique id for keys=> this helps in performance improvement of the app. 
//avoid using index as key  if you are rendering array of elements, instead use a unique identifier like id or any other property.

const Body=()=>{
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {resList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>

        </div>
    )
}
const AppLayout=()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)