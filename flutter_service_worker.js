'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "347b4cea85b92ac72e8f7218e18b9066",
"assets/AssetManifest.bin.json": "7b460b72be0978a43b24ab588cdac2e4",
"assets/AssetManifest.json": "a5a7b013054e9c63314b34fc10d5d7de",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-Black.ttf": "780ea2653c60fa0444b7985ab93ff2e4",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-BlackItalic.ttf": "61fa9ce9f6773d39764921c997c3254a",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-Bold.ttf": "1e36c8992c62a55d07abfe2b621436bf",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-BoldItalic.ttf": "7f7a66e8a9aa4cf06ae7dc5d1056c8b5",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-ExtraBold.ttf": "1823e5f98deadd61c505e28780d27f98",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-ExtraBoldItalic.ttf": "16ed4c258172b28cd3bfb5a60f38baf1",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-Italic.ttf": "4a0b931f7ec6a7424675219cf9f880ab",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-Light.ttf": "52e530dc853c034b84cbf2e07ecb7b54",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-LightItalic.ttf": "33a323a37ab074db2fe555797b6c6ca6",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-Medium.ttf": "9e7372de0b1de89bcc3a1db2f8998622",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-MediumItalic.ttf": "c387d1451e2b8401c107d132efa9d5e8",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-Regular.ttf": "20c1e2c43111bfa549537e09a6b5f431",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-Thin.ttf": "edd2d3f3b0bda4155e9d3c22fdee324b",
"assets/assets/fonts/AlegreyaSansSC/AlegreyaSansSC-ThinItalic.ttf": "681171c355ba88557c58fc2d06a7afe6",
"assets/assets/icons/addUser.svg": "1562aeafbecc958a7bef60b251c35b80",
"assets/assets/icons/apple.png": "1298b14bb74f4e179bfcd5e5aba887e0",
"assets/assets/icons/app_icon.png": "0276a60a04c1e4ce4061ef23601a69a6",
"assets/assets/icons/app_icon1.png": "fa4aabc264fa8c6295f0a3f2254f9461",
"assets/assets/icons/call.svg": "ea7edfa0b7fcb5de2a86f025837890d3",
"assets/assets/icons/chat-icon.svg": "31b473d59535a2604cb9f48b6ca83ba1",
"assets/assets/icons/chatStatus.svg": "3d7f3b9fdc6b07ea426015f308b189b2",
"assets/assets/icons/document.svg": "397cfd18b0c24be594fe5b4b052b9aef",
"assets/assets/icons/emoji.svg": "099f49ed2528b0ebfbabc17d4232e8e5",
"assets/assets/icons/facebook.png": "0833b053623deeac53edebf59cfc5429",
"assets/assets/icons/gallery.svg": "4251bb67598a7ee8f0fef116cd52119a",
"assets/assets/icons/google.png": "91b29118b8039ed9a6dbe8513a0c9bfe",
"assets/assets/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/assets/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/assets/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/assets/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/assets/icons/mic.svg": "e84c627b525ad8473f5ef5b3849b51ee",
"assets/assets/icons/send.svg": "9fd891055cce7dbc3cb065c59398740f",
"assets/assets/icons/send_full.svg": "a51b65a1a2dcc5e9c5a13a5022afaac2",
"assets/assets/icons/Vector.svg": "b2c01cabbff5b0ee8635a26d0c5dc60a",
"assets/assets/icons/videoCall.svg": "4c1195247c982027d7ebf72d0ad66d5e",
"assets/assets/photos/1.png": "f0aea805d86548c2ca08d2d6cc8d4d8b",
"assets/assets/photos/2.png": "73672f055e933c34c94f2d9ebb3cf06d",
"assets/assets/photos/3.png": "7c6488ab0f075651b09ff75f7fc4087a",
"assets/assets/photos/4.png": "829f263a437da966b57da886fd92c6d7",
"assets/assets/photos/5.png": "175f122249027d871a9e3e8e54b9a6b9",
"assets/assets/photos/logo.png": "0276a60a04c1e4ce4061ef23601a69a6",
"assets/assets/photos/main.png": "65f015ae976bed34acc718e071662d96",
"assets/FontManifest.json": "d1e4d42c552d3c3f1ce03bbde438aa3a",
"assets/fonts/MaterialIcons-Regular.otf": "8a1363a80654664899617d50d669bb08",
"assets/NOTICES": "1e5c4c6dd79cbc9a213d0d29539fb210",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/zego_express_engine/assets/ZegoExpressWebFlutterWrapper.js": "1cd9c298ced09b7b18f3f5addd2c8466",
"assets/packages/zego_uikit/assets/icons/2.0x/back.png": "3a15fb4e9557ed72c77543500486c5fb",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_reject.png": "f967ba275f67032b14a0383d8eff0779",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_video.png": "7246561fa86cc404de866e76d9737110",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_voice.png": "24970c6bf9acf13244d9b749e3ea8b4f",
"assets/packages/zego_uikit/assets/icons/2.0x/member_camera_normal.png": "0a0decead6773a2ae1b1fc726cb2dba7",
"assets/packages/zego_uikit/assets/icons/2.0x/member_camera_off.png": "fab9cc0caa1ed63244039a2ac50af5a4",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_normal.png": "e2788b3c2302b8b561e29c064e9a99ff",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_off.png": "4eda86a0a0a6ae75cf8521f63834a54d",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_speaking.png": "16b678656c45cd19cd11baec8c8ac751",
"assets/packages/zego_uikit/assets/icons/2.0x/message_fail.png": "d0fb57427a0074f574aef0d474f213d8",
"assets/packages/zego_uikit/assets/icons/2.0x/message_loading.png": "dc31511440f51dbf93422c6288644247",
"assets/packages/zego_uikit/assets/icons/2.0x/nav_close.png": "faf29b14204b46842cc095efc4131686",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_camera_normal.png": "f9749113cfcdcf507dba5962aa71efec",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_camera_off.png": "c0901dd816919eb4e6ffffd5f7239184",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_end.png": "cb7886e14a43a4d7c6315025032a0272",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_flip_camera.png": "a5e90392059a2957af9e255023ab7c73",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_mic_normal.png": "bb82e53aa5e2da3ee06e82f1d788c992",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_mic_off.png": "0e0d07c9e48304166ba2963ce85c1cba",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_more_checked.png": "86a57573701177bf50526ddf8919257d",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_more_normal.png": "e8cf0cb5b4ae57f3634325200b340aef",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_bluetooth.png": "d24d7aeca55782323f36427f9f68889f",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_normal.png": "f280aecd1664df5ddb9b41a3265fbc96",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_off.png": "3d36462e98a3dd959cdede0b81c3d311",
"assets/packages/zego_uikit/assets/icons/2.0x/send.png": "ade012f5e004a41459da5d44bfd2957f",
"assets/packages/zego_uikit/assets/icons/2.0x/send_disable.png": "8e810767d851b09a84eb05580e7e83d4",
"assets/packages/zego_uikit/assets/icons/2.0x/share_screen_start.png": "dab73df5268a057e660fcab1861a11ca",
"assets/packages/zego_uikit/assets/icons/2.0x/share_screen_stop.png": "28751ac6943d6195c81351dd954c9d7e",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_camera_off.png": "a5c8ecf7492e0f8a1487513a4c0ceef9",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_camera_on.png": "ceb2dfe462b738ad547939b553ff314d",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_full_screen_close.png": "e5d96585b746432238b0c6eec6857526",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_full_screen_open.png": "655a9f372024d96fca06c6a39d7e80d7",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_off.png": "ab6fdc4bef804d7470fa95ab724a3493",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_on.png": "85b79b0c60b1781019350176881d2006",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_speaking.png": "017fb1acbfeafeab17d3119af65dc61b",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_wifi.png": "d201ad7f9e9401f7fe60f79cd69e807c",
"assets/packages/zego_uikit/assets/icons/3.0x/back.png": "c9d6e68a3c3d1b3b49723eb745b15e09",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_reject.png": "50fe4208eaf232329d725b6be760ad05",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_video.png": "b3fd4d33ffcc9e0c05ac8353657faf0f",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_voice.png": "f191776d49da7ce3d3f06a557aee74ea",
"assets/packages/zego_uikit/assets/icons/3.0x/member_camera_normal.png": "e0eecc41b8db3333d6e0b73c71af64fb",
"assets/packages/zego_uikit/assets/icons/3.0x/member_camera_off.png": "0527fda34af9d6369549d7ae54ec467a",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_normal.png": "8a0ab49718e61d010bf1830f697511ec",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_off.png": "a7489c5b6deafcb4eb10a02226bc3d9b",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_speaking.png": "e1cea5ddeba80a0a16e608f75dcceac5",
"assets/packages/zego_uikit/assets/icons/3.0x/message_fail.png": "1904f578c97fc26b7ab85980495bb439",
"assets/packages/zego_uikit/assets/icons/3.0x/message_loading.png": "567cf9465ee6f9b501bb6438207ae3aa",
"assets/packages/zego_uikit/assets/icons/3.0x/nav_close.png": "6dd30082ee4dd26b634f2d107a320cda",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_camera_normal.png": "be38e8cacecd08727f98b23a2cc1b297",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_camera_off.png": "a1676a233c3fdf883b1b9525c52272c6",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_end.png": "c0dc110bb095effd61589390546351d3",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_flip_camera.png": "06b289a7d6de55c6f7a5b43d7244afce",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_mic_normal.png": "93436ec1f8389307c037521ce840f0a2",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_mic_off.png": "d7b3619803222f891f8d1487e2dd95af",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_more_checked.png": "c3162cc37bc41fb13957b70b06476c3e",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_more_normal.png": "45f7fe05bac7f3c1106d63c1078d7a7f",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_bluetooth.png": "d15c31d947ce16f9f08ed2066542c629",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_normal.png": "2037c7dec37882bf30049d75dd3740c4",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_off.png": "4f9bd995c5123400a3f13b4e4f1ed90c",
"assets/packages/zego_uikit/assets/icons/3.0x/send.png": "024f9c9faa2127335926a4037e23a684",
"assets/packages/zego_uikit/assets/icons/3.0x/send_disable.png": "61577087db110346c44498944d1f491c",
"assets/packages/zego_uikit/assets/icons/3.0x/share_screen_start.png": "be1c3f30eef1e9777618df830e8c406f",
"assets/packages/zego_uikit/assets/icons/3.0x/share_screen_stop.png": "210873b802db239aec4c790855ef6d60",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_camera_off.png": "5275a3c18503c20b5a6238450272d2be",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_camera_on.png": "7369f517f02618f0ba7fe5c1e4fe55fd",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_full_screen_close.png": "8dafedc394aa80ab9370073413e89be7",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_full_screen_open.png": "e4e91ee80390a53294a20c1e12dd783c",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_off.png": "33d5afecd9378cf570271818d4c56667",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_on.png": "2b8b980b6e013bcfdbb0b58f1e5f0640",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_speaking.png": "18354ef4c2606bcf96d4a0b3b9065193",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_wifi.png": "0b78795289c2165bd6646f714cd2159c",
"assets/packages/zego_uikit/assets/icons/back.png": "1cc8237aa89ef773a1e65d57293a5c06",
"assets/packages/zego_uikit/assets/icons/invite_reject.png": "aef7ea169c2aa2c1abfaa366fec54da0",
"assets/packages/zego_uikit/assets/icons/invite_video.png": "8278efa5e15b6ea4e3af4b408611fe62",
"assets/packages/zego_uikit/assets/icons/invite_voice.png": "849a299fd3670fc6693da77d392d4e45",
"assets/packages/zego_uikit/assets/icons/member_camera_normal.png": "0c9b7ef19613acc4f7b45b03eaa8c05a",
"assets/packages/zego_uikit/assets/icons/member_camera_off.png": "7e4da8fda7851b9c07bdb16e54532021",
"assets/packages/zego_uikit/assets/icons/member_mic_normal.png": "9c6cc34ee53802ea794e0d9e55b92124",
"assets/packages/zego_uikit/assets/icons/member_mic_off.png": "da54635dfe0e424047509267c747c683",
"assets/packages/zego_uikit/assets/icons/member_mic_speaking.png": "cf6b2e626ec6571f11d8638ae3fb8609",
"assets/packages/zego_uikit/assets/icons/message_fail.png": "c4f7303a3963fa31acd74ca482d4e097",
"assets/packages/zego_uikit/assets/icons/message_loading.png": "41913c24ab8f26819589af76852f6f4c",
"assets/packages/zego_uikit/assets/icons/nav_close.png": "d5a4f6a62cf4761f787d0b2e718e535e",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_camera_normal.png": "101da6ff95cb34d25aaef7a1c058c473",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_camera_off.png": "47c428aed459e061d743f6286c61b0ba",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_end.png": "3db1588b978af3720d74a5a6dbdb4cff",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_flip_camera.png": "6929bd51a1655cf7df3a23a2f3133ec8",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_mic_normal.png": "05b63e5db51f06fcf2fe8d8f2ffe9669",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_mic_off.png": "d522490af830e751a9735927194c2e8b",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_more_checked.png": "3573c99e2a7720ff2092e4f572b00012",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_more_normal.png": "96fb3eb790757ec86896cbdd56953e97",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_bluetooth.png": "c803bf03b3df3af7a34d36f895c8d0bb",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_normal.png": "3783636d5601e7cba03cbefbfc9d9e93",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_off.png": "941cd4e186d9feeda35b793a55ab05cf",
"assets/packages/zego_uikit/assets/icons/send.png": "b6f3a4923052cce9db8ef6fc39d2c90b",
"assets/packages/zego_uikit/assets/icons/send_disable.png": "7e80b5c74959ba84cbc7e50beb0e34f1",
"assets/packages/zego_uikit/assets/icons/share_screen_start.png": "0cd5f14df5e1bb573d2aef1de2ed32b6",
"assets/packages/zego_uikit/assets/icons/share_screen_stop.png": "abef995e3768c42d16ac5e1b05120cb5",
"assets/packages/zego_uikit/assets/icons/video_view_camera_off.png": "00241c1e4517457be35ec8235b848633",
"assets/packages/zego_uikit/assets/icons/video_view_camera_on.png": "767c529173c084143074a6a97e32f16f",
"assets/packages/zego_uikit/assets/icons/video_view_full_screen_close.png": "347b5c7e154224cbe561f5d7a4a02bab",
"assets/packages/zego_uikit/assets/icons/video_view_full_screen_open.png": "c0fdccb5b807c1d25e9de110a2f24e46",
"assets/packages/zego_uikit/assets/icons/video_view_mic_off.png": "ffcd14ed2c2e4d68554bbab32ca83a7e",
"assets/packages/zego_uikit/assets/icons/video_view_mic_on.png": "5f4a10f968013313145e45051cb20bf7",
"assets/packages/zego_uikit/assets/icons/video_view_mic_speaking.png": "f36f281fee197efe2eabc76b1355bc88",
"assets/packages/zego_uikit/assets/icons/video_view_wifi.png": "15ceb63b27034d03ae339e78c63238a6",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/back.png": "3a15fb4e9557ed72c77543500486c5fb",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/im.png": "5419f695006e601b7bcc4e85e94d177f",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/minimizing.png": "a61f210b1f445bfeecf7a23a54e69703",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_basement.png": "93e7430bee05e1661afcf35a6020a41e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_concert.png": "f6623588f16fc9812e1d5ba0a98eda66",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_gramophone.png": "182217bd275d013de99d8ee7b31b11a1",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_hall.png": "0bd166cb0d18715f0a1839e489d4fc9c",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_ktv.png": "17b0ee28bdb15fbf0ad7f6e1514432b6",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_largeRoom.png": "74f81fb5af623d30507fd05de06ad252",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_none.png": "32c045a867607e16593a9885b811ee73",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_popular.png": "66551bb42f5ab16600dfccb0587d0b96",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_recordingStudio.png": "67630d5c214946175fd995a98e11cbf4",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_rock.png": "65613f2924e7134463bcbe31db8bd8f6",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_smallRoom.png": "58d78d9522db5fd6939f4a8d80665111",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/reverb_preset_valley.png": "1c0454a55543c2addced0283147de6ac",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/toolbar_beauty.png": "d52d7d2709161d04536c4e79fac7aa21",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/toolbar_sound.png": "e1f5d346e3599e3c4b0a75f1229f4368",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/top_camera_overturn.png": "f648e99e1db0435a3641ef0c59bce702",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/top_im.png": "bfae7b2c9d0cc8d79f94310fb3498818",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/top_member_normal.png": "21a466088f1aa00d0c77260dbea684cb",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_aMajor.png": "011cde25aaf8b511b48dc514ab933133",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_aMajor_selected.png": "25218c01a531c77ff0cccf0c463abaec",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_cMajor.png": "5fde83fe2c9e31a74527712db4d2e397",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_cMajor_selected.png": "b248de48ece741c1d4f61bbf842d459b",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_crystalClear.png": "a1e877fe0b9dc9dd8a5683815f5511d9",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_crystalClear_selected.png": "4abeabf81fe964549f38f0a9b19cb52c",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_deep.png": "b52372c35e98c25c82483432fdc36486",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_deep_selected.png": "0e7ed98af80aaf07978e884c9f8b200a",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_ethereal.png": "c69e053fd734dece26b18b9f25131bc3",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_ethereal_selected.png": "055dd2cb84c82e1cbca743d997dca5c9",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_female.png": "00892f95c2c6ff5fe8bd7620a969ba52",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_female_selected.png": "2740081932474ea4b33e5bfae4b4f02e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_harmonicMinor.png": "734fdb49391ec63f03074fb5edda90b8",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_harmonicMinor_selected.png": "661889bfb41fca3b62806d0504bd869c",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_littleBoy.png": "693fa23b990e96f209b737afb19da755",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_littleBoy_selected.png": "40f9a3c380fce162e39630666ee466cc",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_littleGirl.png": "307af2b65a7d9cd8ce44db877eae7ba1",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_littleGirl_selected.png": "f10d00e75a44a4131e5875976d98db02",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_male.png": "e1bd802bbed2c91df340c31116c647d8",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_male_selected.png": "374cb6d4de98c5395007e021c47273d6",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_none.png": "fef3be502e98daf9d9ed8a9b40f07efb",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_none_selected.png": "fe7524fcc61d46e1541df25389d51a50",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_optimusPrime.png": "1f00d32f094bc36e70da567cdcdda0af",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_optimusPrime_selected.png": "f3395bb1643dbaebcc9befbe2b595f0b",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_robot.png": "dfb1887860f92ba8eccbddc005c5db87",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/voice_changer_robot_selected.png": "323f52b19878239cf4994ad5e1f38907",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/back.png": "c9d6e68a3c3d1b3b49723eb745b15e09",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/im.png": "a204a9ee814519e5405e5faa4c3c723e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/minimizing.png": "3c3bed57d57bb8bb2ca02fd1427842a8",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_basement.png": "c554c71d2cbe15fca8a45107c1483200",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_concert.png": "00f8c1f3dc80e9ea831c750c3302bee5",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_gramophone.png": "1228c599f3d4132e6472dd5b2d2b179c",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_hall.png": "9ae1edc53c88d8278e30fb3d0c818227",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_ktv.png": "41731583279aff849ff6d504510eb694",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_largeRoom.png": "f63e5f77654e8c1edfaf85c0c75a59ff",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_none.png": "365a13466c16cd47d66ba2344f702939",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_popular.png": "b083051bcb0a7663dfaee95799c627e8",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_recordingStudio.png": "bfcdb1e76b97e8ae199b762ff1f7aee4",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_rock.png": "790ea6ebe10303747a6c2ad7c28882a4",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_smallRoom.png": "b1cd346213b81f5121e24ce1ccf5a7e2",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/reverb_preset_valley.png": "ad3f1fa3f7897d6063d3f4f53e4ec273",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/toolbar_beauty.png": "4c322ca9d387f9a37f6fe621b2651681",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/toolbar_sound.png": "abd3907b4cdc62e0df03514f146c5105",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/top_camera_overturn.png": "522c321eae222817299840e170496638",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/top_im.png": "7c406701f8f17e2d1fda20fbd37aa660",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/top_member_normal.png": "eb5dee3f434a0a9fc2c601458d608841",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_aMajor.png": "9ce03ec5bc9a83d8fce2a19c1f2945fe",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_aMajor_selected.png": "4dc9ae05f7a0fd3b398dfa307754c76e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_cMajor.png": "01e0e75b8c50e4b34871b80285f821b0",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_cMajor_selected.png": "c57fcd6644395c17a1b384ee804fa7b6",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_crystalClear.png": "6cfd77baefaa3cf7ad03c02e7d1b325c",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_crystalClear_selected.png": "11d65a48e25609aecf88acfece30fe7f",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_deep.png": "e01e65e07a90e5ed15b0faec85432f4f",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_deep_selected.png": "ec3e2e77c3ccfb3c2829b00a4d52e68a",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_ethereal.png": "d3f859ea9c50221b0a96795aa67be67d",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_ethereal_selected.png": "d0e71953cabe6570d3f83066eea20a10",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_female.png": "e320240fe4a820206dc08c008663e561",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_female_selected.png": "b363ce79a5f31149aab4229d86a1ca8f",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_harmonicMinor.png": "9a8c17fa6bc894f4b95eb592690ceda7",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_harmonicMinor_selected.png": "55f8f216d8cac50a119e18dbd3009a19",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_littleBoy_selected.png": "2199c601a7de94ee475270e620523e87",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_littleGirl.png": "c31a474de3e0139214ce1e408c55575b",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_littleGirl_selected.png": "40e23977036f6fc70e416f17e702d612",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_male.png": "cbc091194cff935d5c34bf6fcc140061",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_male_selected.png": "869b7fcf4c785a833cc52808fffb8519",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_none.png": "8c4e9ebf9651fb81e6a3078c8593ef23",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_none_selected.png": "c81a57d8d66fcfe5cf557ab6fdf93ad2",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_optimusPrime.png": "d23ebe11aad55f3cd15530f7a2ce80cc",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_optimusPrime_selected.png": "260571eecd08b944743ea9c8601285f2",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_robot.png": "0c29beeee0f933342bc23271cab1c284",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/voice_changer_robot_selected.png": "da839793f4d697ce3ae15e36b91f7d14",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/back.png": "1cc8237aa89ef773a1e65d57293a5c06",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/im.png": "e69aca2198610729852a6571f06633cb",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/minimizing.png": "de79eb6c8dd6c9e458136bbe6edef3d2",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_basement.png": "a65658b4a3ea5afb2072edcfe4020b8e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_concert.png": "077664722133d813171dc253757ffe2d",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_gramophone.png": "636f6d797079e6f6b0980d42168cee6a",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_hall.png": "bcffc6864ff474b99065c810514308d9",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_ktv.png": "e4cc909b4013dab20a4ac7fab9979055",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_largeRoom.png": "9e4e554ee9af05420e7c0bca9d0c7200",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_none.png": "de634617761d70a3365e52a99ca0d9de",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_popular.png": "ef587ae29fe65e07a50b622184a6c491",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_recordingStudio.png": "f26a5667d829d4be03a4153f68ccdf61",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_rock.png": "f241663ae6ef90b0797a2dba607b9089",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_smallRoom.png": "339c1b8207e52e51cc6cba681149742e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/reverb_preset_valley.png": "c0dd2097a6f612cd21b105cb5e511ca5",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/toolbar_beauty.png": "e92042fa28756d017345ec177ae77cc1",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/toolbar_sound.png": "d8f312b7b2b599fff096148ec9c3d46b",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/top_camera_overturn.png": "07d7ce9e0ce2e0d5c3a3e7e3325e036e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/top_im.png": "eb0fc118673f25f108dae6cf100349bd",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/top_member_normal.png": "4a669238d6446736c1add5e321688145",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_aMajor.png": "030070dc46d37e289450f449352a3561",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_aMajor_selected.png": "09804fe0a91685162fb3fb4ed0b16969",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_cMajor.png": "8e757d359d4c87604ee6d1aacfd25ebc",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_cMajor_selected.png": "8ed0db2cc0539b327275ce24e09db037",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_crystalClear.png": "7e59f9c7d71bee52111666a29bd50cad",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_crystalClear_selected.png": "3b4b1c298f16c3fd8e238c47ea704110",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_deep.png": "d6c911ebd1e1c99745a25f7cbe3563e9",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_deep_selected.png": "f26208b2fe8a7ce51ee3ff6a4388357e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_ethereal.png": "4b7ae0ccc70d3d20bdbd02418b959441",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_ethereal_selected.png": "32c5275d888a3614d23da5b916b83d0a",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_female.png": "8bab155f6cd8f683c08bebb0e600c20f",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_female_selected.png": "7e7b26c234a9688c08a25a87316d7e3d",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_harmonicMinor.png": "5b8be3359d65f64072719608437de4c9",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_harmonicMinor_selected.png": "f742754506d7d89997a29cc82b73fc5f",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_littleBoy.png": "27608915d17c61ba45234ff070163f3d",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_littleBoy_selected.png": "361f2c7fa875da0a730e441f92d4183c",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_littleGirl.png": "ceb1568a1fd2a8f78175fc4a630edc1d",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_littleGirl_selected.png": "e569fee89d256032923468d754c9e679",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_male.png": "b99d6b8abeb6d60d524150880529513c",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_male_selected.png": "16272fc9fb4fa650cc86abe6248afbc7",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_none.png": "430231fde4ae736ef74c5cd0fd51d4a3",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_none_selected.png": "9caed68a8a8031d9a29e2c4799c4ea20",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_optimusPrime.png": "0a053221abf30862170f0e224ab60247",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_optimusPrime_selected.png": "20d669b777be5740b3992769cd123408",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_robot.png": "fb7261581bfbc2dc8cea90f9273669d3",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/voice_changer_robot_selected.png": "f408258e194f622ef5a3600d46357532",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/audio/incoming.mp3": "a12f085e3356fc27828901cce14f3db4",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/audio/outgoing.mp3": "8abea83d18c4e3efa01db3819bfad8cd",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/invite_background.png": "4c7c5181f0edc3cb1cabfacc36a1bef5",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/invite_reject.png": "f967ba275f67032b14a0383d8eff0779",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/invite_video.png": "7246561fa86cc404de866e76d9737110",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/invite_voice.png": "24970c6bf9acf13244d9b749e3ea8b4f",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_bottom_cancel.png": "dfc5c96309c8761dcf140fce56a5a365",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_bottom_decline.png": "036a95b0857b55a62bc14a9dc7c3e905",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_bottom_video.png": "53008544346348d557cf27ec4ff324f3",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_bottom_voice.png": "a35a18563c555cb305534c2e2f90744b",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_top_switch_camera.png": "ffd33a31458339186b13e9b03435e90e",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/invite_background.png": "8271574223a98576ae28b1639f183976",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/invite_reject.png": "50fe4208eaf232329d725b6be760ad05",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/invite_video.png": "b3fd4d33ffcc9e0c05ac8353657faf0f",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/invite_voice.png": "f191776d49da7ce3d3f06a557aee74ea",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_bottom_cancel.png": "fe6a4bd60a8a56d3375c9c08fcc9eb47",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_bottom_decline.png": "3f7867881527d5258c4e233f3cd02801",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_bottom_video.png": "bd1530d449b8761d956a24b337c704c7",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_bottom_voice.png": "33e211177a377dde5abbae46eaa1bb78",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_top_switch_camera.png": "7923152ef405d84ee36d5ce85fca14c4",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/invite_background.png": "39f2aad363edb5c61d5b55e0f0cf3b63",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/invite_reject.png": "aef7ea169c2aa2c1abfaa366fec54da0",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/invite_video.png": "8278efa5e15b6ea4e3af4b408611fe62",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/invite_voice.png": "849a299fd3670fc6693da77d392d4e45",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_bottom_cancel.png": "347b08d9cac06094bdfeca7328c4bcb3",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_bottom_decline.png": "b7f71d65ae2450ab7f2713e5e2e57ab2",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_bottom_video.png": "43949026115a3ef277c1453d9ba8d744",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_bottom_voice.png": "5e35f466244d20a19dc96cef36aeb43b",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_top_switch_camera.png": "10c4b42139136e814271aa636a64275e",
"assets/packages/zego_zim/assets/index.js": "d2c9a91bf1e40f9cf59a269b34ba00a3",
"assets/packages/zego_zpns/assets/zpns.js": "b83a7288dbdd4914da1b0b78576f0ee6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "0276a60a04c1e4ce4061ef23601a69a6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8df29f05584b77a44f8cae7aa5d41e81",
"index.html": "0e733c953fdd4c55b44202eb28955ed9",
"/": "0e733c953fdd4c55b44202eb28955ed9",
"main.dart.js": "c0271f7387b7f2d1cf105f234ccb80e4",
"manifest.json": "0613d81f7b2cbbbb790cc19688298057",
"version.json": "d59802f8f15d3216e6d47200abeb4077"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
