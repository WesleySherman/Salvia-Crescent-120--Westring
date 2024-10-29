var APP_DATA = {
  "scenes": [
    {
      "id": "0-01---parking-area",
      "name": "01 - Parking Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.4132872743595666,
        "pitch": 0.028196352401508307,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.2609270077891459,
          "pitch": 0.08925219397296758,
          "rotation": 0,
          "target": "1-02---front-of-shop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02---front-of-shop",
      "name": "02 - Front of Shop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.06845458144092653,
        "pitch": 0.0018909772233755007,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.03514425970680435,
          "pitch": 0.22028492451048365,
          "rotation": 0,
          "target": "3-04---main-room"
        },
        {
          "yaw": -2.0273291287327435,
          "pitch": 0.0755093254905077,
          "rotation": 4.71238898038469,
          "target": "0-01---parking-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03---back-room-1",
      "name": "03 - Back Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -1.0012339611677685,
        "pitch": 0.06507571392991451,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.461836420139658,
          "pitch": 0.3979491755827418,
          "rotation": 0,
          "target": "3-04---main-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04---main-room",
      "name": "04 - Main Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.2386408313479045,
        "pitch": 0.12781450572022912,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.4361222760902708,
          "pitch": 0.32547240729974547,
          "rotation": 0,
          "target": "1-02---front-of-shop"
        },
        {
          "yaw": -1.5097028526002418,
          "pitch": 0.18971005899873816,
          "rotation": 0,
          "target": "2-03---back-room-1"
        },
        {
          "yaw": -0.33498151873003223,
          "pitch": 0.23709383299787312,
          "rotation": 0,
          "target": "4-05---back-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05---back-room-2",
      "name": "05 - Back Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -1.323597289469161,
        "pitch": -0.013626250156523412,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.744559039026651,
          "pitch": 0.37297956896505724,
          "rotation": 0,
          "target": "3-04---main-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Salvia Crescent 120, Westring",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
