// // let brand = document.getElementById("Brand");
// // let price = document.getElementById("price");
// // let camera = document.getElementById("camera");
// // var result = {};
// // let thirdr = {};

// // let resultTwo = {};
// // fetch("./phones.json")
// //   .then(async (response) => {
// //     return await response.json();
// //   })
// //   .then((data) => {
// //     brand.onchange = () => {
// //       let n = 0;
// //       for (let i = 0; i < data.length; i++) {
// //         if (data[i].phone_name.split(" ")[0] == brand.value) {
// //           result[n] = { ...data[i] };
// //           n++;
// //           result = Object.values(result);
// //         }
// //       }
// //       console.log(result);
// //       return result;
// //     };

// //     price.onblur = () => {
// //       let n = 0;
// //       for (let i = 0; i < result.length; i++) {
// //         if (result[i].price <= price.value) {
// //           resultTwo[n] = { ...result[i] };
// //           n++;
// //           resultTwo = Object.values(resultTwo);
// //         }
// //       }
// //       console.log(resultTwo);
// //       return resultTwo;
// //     };
// //     camera.onblur = () => {
// //       let n = 0;
// //       console.log(+camera.value);
// //       resultTwo.forEach((ele) => {
// //         console.log(+ele.camera_quality.split(/(\D+)/)[0]);
// //         if (+ele.camera_quality.split(/(\D+)/)[0] >= +camera.value) {
// //           thirdr[n] = { ...ele };
// //           n++;
// //           thirdr = Object.values(thirdr);
// //         }
// //       });
// //       console.log(thirdr);
// //       return thirdr;
// //     };
// //   })
// //   .catch((e) => {
// //     console.log(e);
// //   });
// // const form = document.getElementById("form");

// // form.onsubmit = (e) => {

// //   e.preventDefault();
// // };

// const arr = [
//   {
//     phone_name: "Samsung Galaxy S21 Ultra",
//     price: 1199,
//     camera_quality: "108MP",
//     battery: "5000mAh",
//     screen_size: "6.8 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy S21+",
//     price: 999,
//     camera_quality: "12MP",
//     battery: "4800mAh",
//     screen_size: "6.7 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy S21",
//     price: 799,
//     camera_quality: "12MP",
//     battery: "4000mAh",
//     screen_size: "6.2 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy Note 20 Ultra",
//     price: 1299,
//     camera_quality: "108MP",
//     battery: "4500mAh",
//     screen_size: "6.9 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy Note 20",
//     price: 999,
//     camera_quality: "64MP",
//     battery: "4300mAh",
//     screen_size: "6.7 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy S20 FE",
//     price: 699,
//     camera_quality: "12MP",
//     battery: "4500mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy A71 5G",
//     price: 599,
//     camera_quality: "64MP",
//     battery: "4500mAh",
//     screen_size: "6.7 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy A51",
//     price: 399,
//     camera_quality: "48MP",
//     battery: "4000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy A21s",
//     price: 199,
//     camera_quality: "48MP",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy M31",
//     price: 249,
//     camera_quality: "64MP",
//     battery: "6000mAh",
//     screen_size: "6.4 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy M51",
//     price: 329,
//     camera_quality: "64MP",
//     battery: "7000mAh",
//     screen_size: "6.7 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy A12",
//     price: 149,
//     camera_quality: "48MP",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy A02s",
//     price: 109,
//     camera_quality: "13MP",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Samsung Galaxy A10s",
//     price: 149,
//     camera_quality: "13MP",
//     battery: "4000mAh",
//     screen_size: "6.2 inches",
//   },
//   {
//     phone_name: "iPhone 13 Pro Max",
//     price: 1099,
//     camera_quality: "12MP",
//     battery: "4352mAh",
//     screen_size: "6.7 inches",
//   },
//   {
//     phone_name: "iPhone 13 Pro",
//     price: 999,
//     camera_quality: "12MP",
//     battery: "3095mAh",
//     screen_size: "6.1 inches",
//   },
//   {
//     phone_name: "iPhone 13",
//     price: 799,
//     camera_quality: "12MP",
//     battery: "2947mAh",
//     screen_size: "6.1 inches",
//   },
//   {
//     phone_name: "iPhone 12 Pro Max",
//     price: 1099,
//     camera_quality: "12MP",
//     battery: "3687mAh",
//     screen_size: "6.7 inches",
//   },
//   {
//     phone_name: "iPhone 12 Pro",
//     price: 999,
//     camera_quality: "12MP",
//     battery: "2815mAh",
//     screen_size: "6.1 inches",
//   },
//   {
//     phone_name: "iPhone 12",
//     price: 799,
//     camera_quality: "12MP",
//     battery: "2815mAh",
//     screen_size: "6.1 inches",
//   },
//   {
//     phone_name: "iPhone SE (2020)",
//     price: 399,
//     camera_quality: "12MP",
//     battery: "1821mAh",
//     screen_size: "4.7 inches",
//   },
//   {
//     phone_name: "iPhone 11 Pro Max",
//     price: 1099,
//     camera_quality: "12MP",
//     battery: "3969mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "iPhone 11 Pro",
//     price: 999,
//     camera_quality: "12MP",
//     battery: "3190mAh",
//     screen_size: "5.8 inches",
//   },
//   {
//     phone_name: "iPhone 11",
//     price: 699,
//     camera_quality: "12MP",
//     battery: "3110mAh",
//     screen_size: "6.1 inches",
//   },
//   {
//     phone_name: "iPhone XS Max",
//     price: 1099,
//     camera_quality: "12MP",
//     battery: "3174mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "iPhone XS",
//     price: 999,
//     camera_quality: "12MP",
//     battery: "2658mAh",
//     screen_size: "5.8 inches",
//   },
//   {
//     phone_name: "iPhone XR",
//     price: 749,
//     camera_quality: "12MP",
//     battery: "2942mAh",
//     screen_size: "6.1 inches",
//   },
//   {
//     phone_name: "Xiaomi Mi 11",
//     price: 749,
//     camera_quality: "108MP",
//     battery: "4600mAh",
//     screen_size: "6.81 inches",
//   },
//   {
//     phone_name: "Xiaomi Mi 11 Ultra",
//     price: 1199,
//     camera_quality: "50MP",
//     battery: "5000mAh",
//     screen_size: "6.81 inches",
//   },
//   {
//     phone_name: "Xiaomi Mi 10T Pro",
//     price: 599,
//     camera_quality: "108MP",
//     battery: "5000mAh",
//     screen_size: "6.67 inches",
//   },
//   {
//     phone_name: "Xiaomi Mi 10T",
//     price: 499,
//     camera_quality: "64MP",
//     battery: "5000mAh",
//     screen_size: "6.67 inches",
//   },
//   {
//     phone_name: "Xiaomi Poco X3 Pro",
//     price: 249,
//     camera_quality: "48MP",
//     battery: "5160mAh",
//     screen_size: "6.67 inches",
//   },
//   {
//     phone_name: "Xiaomi Poco X3",
//     price: 199,
//     camera_quality: "64MP",
//     battery: "6000mAh",
//     screen_size: "6.67 inches",
//   },
//   {
//     phone_name: "Xiaomi Redmi Note 10 Pro",
//     price: 279,
//     camera_quality: "108MP",
//     battery: "5020mAh",
//     screen_size: "6.67 inches",
//   },
//   {
//     phone_name: "Xiaomi Redmi Note 10S",
//     price: 229,
//     camera_quality: "64MP",
//     battery: "5000mAh",
//     screen_size: "6.43 inches",
//   },
//   {
//     phone_name: "Xiaomi Redmi 9",
//     price: 149,
//     camera_quality: "13MP",
//     battery: "5020mAh",
//     screen_size: "6.53 inches",
//   },
//   {
//     phone_name: "Xiaomi Redmi 9C",
//     price: 99,
//     camera_quality: "13MP",
//     battery: "5000mAh",
//     screen_size: "6.53 inches",
//   },
//   {
//     phone_name: "Xiaomi Mi Note 10 Lite",
//     price: 279,
//     camera_quality: "64MP",
//     battery: "5260mAh",
//     screen_size: "6.47 inches",
//   },
//   {
//     phone_name: "Huawei Mate 40 Pro",
//     price: 1199,
//     camera_quality: "50MP ",
//     battery: "4400mAh",
//     screen_size: "6.76 inches",
//   },
//   {
//     phone_name: "Huawei P40 Pro",
//     price: 899,
//     camera_quality: "50MP ",
//     battery: "4200mAh",
//     screen_size: "6.58 inches",
//   },
//   {
//     phone_name: "Huawei P30 Pro",
//     price: 749,
//     camera_quality: "40MP ",
//     battery: "4200mAh",
//     screen_size: "6.47 inches",
//   },
//   {
//     phone_name: "Huawei Nova 8 Pro",
//     price: 699,
//     camera_quality: "64MP ",
//     battery: "4000mAh",
//     screen_size: "6.72 inches",
//   },
//   {
//     phone_name: "Huawei Nova 8",
//     price: 599,
//     camera_quality: "64MP ",
//     battery: "3800mAh",
//     screen_size: "6.57 inches",
//   },
//   {
//     phone_name: "Huawei Mate 30 Pro",
//     price: 799,
//     camera_quality: "40MP ",
//     battery: "4500mAh",
//     screen_size: "6.53 inches",
//   },
//   {
//     phone_name: "Huawei P40 Lite",
//     price: 299,
//     camera_quality: "48MP ",
//     battery: "4200mAh",
//     screen_size: "6.4 inches",
//   },
//   {
//     phone_name: "Huawei P Smart 2021",
//     price: 199,
//     camera_quality: "48MP ",
//     battery: "5000mAh",
//     screen_size: "6.67 inches",
//   },
//   {
//     phone_name: "Huawei Y9a",
//     price: 249,
//     camera_quality: "64MP ",
//     battery: "4200mAh",
//     screen_size: "6.63 inches",
//   },
//   {
//     phone_name: "Huawei Y6p",
//     price: 149,
//     camera_quality: "13MP ",
//     battery: "5000mAh",
//     screen_size: "6.3 inches",
//   },
//   {
//     phone_name: "Huawei P30 Lite",
//     price: 299,
//     camera_quality: "48MP ",
//     battery: "3340mAh",
//     screen_size: "6.15 inches",
//   },
//   {
//     phone_name: "LG Wing 5G",
//     price: 999,
//     camera_quality: "64MP ",
//     battery: "4000mAh",
//     screen_size: "6.8 inches",
//   },
//   {
//     phone_name: "LG V60 ThinQ 5G",
//     price: 899,
//     camera_quality: "64MP ",
//     battery: "5000mAh",
//     screen_size: "6.8 inches",
//   },
//   {
//     phone_name: "LG Velvet",
//     price: 599,
//     camera_quality: "48MP ",
//     battery: "4300mAh",
//     screen_size: "6.8 inches",
//   },
//   {
//     phone_name: "LG G8X ThinQ Dual Screen",
//     price: 699,
//     camera_quality: "12MP ",
//     battery: "4000mAh",
//     screen_size: "6.4 inches",
//   },
//   {
//     phone_name: "LG G8 ThinQ",
//     price: 599,
//     camera_quality: "12MP ",
//     battery: "3500mAh",
//     screen_size: "6.1 inches",
//   },
//   {
//     phone_name: "LG Stylo 6",
//     price: 219,
//     camera_quality: "13MP ",
//     battery: "4000mAh",
//     screen_size: "6.8 inches",
//   },
//   {
//     phone_name: "LG K92 5G",
//     price: 359,
//     camera_quality: "64MP ",
//     battery: "4000mAh",
//     screen_size: "6.7 inches",
//   },
//   {
//     phone_name: "LG K51S",
//     price: 199,
//     camera_quality: "32MP ",
//     battery: "4000mAh",
//     screen_size: "6.55 inches",
//   },
//   {
//     phone_name: "LG K41S",
//     price: 149,
//     camera_quality: "13MP ",
//     battery: "4000mAh",
//     screen_size: "6.55 inches",
//   },
//   {
//     phone_name: "LG K31",
//     price: 139,
//     camera_quality: "13MP ",
//     battery: "3000mAh",
//     screen_size: "5.7 inches",
//   },
//   {
//     phone_name: "LG Stylo 5",
//     price: 219,
//     camera_quality: "13MP ",
//     battery: "3500mAh",
//     screen_size: "6.2 inches",
//   },
//   {
//     phone_name: "LG V40 ThinQ",
//     price: 399,
//     camera_quality: "12MP ",
//     battery: "3300mAh",
//     screen_size: "6.4 inches",
//   },
//   {
//     phone_name: "Oppo Find X3 Pro",
//     price: 1199,
//     camera_quality: "50MP ",
//     battery: "4500mAh",
//     screen_size: "6.7 inches",
//   },
//   {
//     phone_name: "Oppo Reno 5 Pro+ 5G",
//     price: 799,
//     camera_quality: "50MP",
//     battery: "4500mAh",
//     screen_size: "6.55 inches",
//   },
//   {
//     phone_name: "Oppo Reno 4 Pro 5G",
//     price: 749,
//     camera_quality: "48MP ",
//     battery: "4000mAh",
//     screen_size: "6.55 inches",
//   },
//   {
//     phone_name: "Oppo A94 5G",
//     price: 349,
//     camera_quality: "48MP ",
//     battery: "4310mAh",
//     screen_size: "6.43 inches",
//   },
//   {
//     phone_name: "Oppo A54 5G",
//     price: 299,
//     camera_quality: "48MP ",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Oppo F19 Pro+ 5G",
//     price: 369,
//     camera_quality: "64MP ",
//     battery: "4310mAh",
//     screen_size: "6.43 inches",
//   },
//   {
//     phone_name: "Oppo A15s",
//     price: 149,
//     camera_quality: "13MP ",
//     battery: "4230mAh",
//     screen_size: "6.52 inches",
//   },
//   {
//     phone_name: "Oppo A53",
//     price: 189,
//     camera_quality: "13MP ",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Oppo A12",
//     price: 129,
//     camera_quality: "13MP ",
//     battery: "4230mAh",
//     screen_size: "6.22 inches",
//   },
//   {
//     phone_name: "Oppo A31",
//     price: 149,
//     camera_quality: "12MP ",
//     battery: "4230mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Oppo Reno 3 Pro",
//     price: 549,
//     camera_quality: "64MP ",
//     battery: "4025mAh",
//     screen_size: "6.4 inches",
//   },
//   {
//     phone_name: "Realme GT",
//     price: 399,
//     camera_quality: "64MP ",
//     battery: "4500mAh",
//     screen_size: "6.43 inches",
//   },
//   {
//     phone_name: "Realme X7 Pro 5G",
//     price: 449,
//     camera_quality: "64MP ",
//     battery: "4500mAh",
//     screen_size: "6.55 inches",
//   },
//   {
//     phone_name: "Realme 8 Pro",
//     price: 279,
//     camera_quality: "108MP ",
//     battery: "4500mAh",
//     screen_size: "6.4 inches",
//   },
//   {
//     phone_name: "Realme 7 Pro",
//     price: 299,
//     camera_quality: "64MP ",
//     battery: "4500mAh",
//     screen_size: "6.4 inches",
//   },
//   {
//     phone_name: "Realme 7i",
//     price: 179,
//     camera_quality: "64MP ",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Realme Narzo 30 Pro 5G",
//     price: 199,
//     camera_quality: "48MP ",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Realme C25",
//     price: 149,
//     camera_quality: "13MP ",
//     battery: "6000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Realme C21",
//     price: 119,
//     camera_quality: "13MP ",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Realme 7 5G",
//     price: 279,
//     camera_quality: "48MP ",
//     battery: "5000mAh",
//     screen_size: "6.5 inches",
//   },
//   {
//     phone_name: "Realme 6 Pro",
//     price: 299,
//     camera_quality: "64MP ",
//     battery: "4300mAh",
//     screen_size: "6.6 inches",
//   },
//   {
//     phone_name: "Realme 6",
//     price: 199,
//     camera_quality: "64MP ",
//     battery: "4300mAh",
//     screen_size: "6.5 inches",
//   },
// ];

// arr.forEach((phone) => {
//   phone.price = parseInt(phone.price);
//   phone["camera Quality"] = parseInt(phone["camera Quality"]);
//   phone.screen_size = parseFloat(phone.screen_size);
//   phone.battery = parseInt(phone.battery);
// });

const arr = [
  [
    [2.935057, 36.129909],
    [2.935066, 36.129907],
    [2.935099, 36.129904],
    [2.935, 36.130034],
    [2.934905, 36.130067],
    [2.934728, 36.130163],
    [2.933521, 36.130977],
    [2.932931, 36.13137],
    [2.932815, 36.131447],
    [2.931532, 36.132301],
    [2.931054, 36.132619],
    [2.929719, 36.133517],
    [2.929616, 36.133604],
    [2.92953, 36.133698],
    [2.929473, 36.133774],
    [2.929499, 36.133799],
    [2.929509, 36.133819],
    [2.929519, 36.133841],
    [2.929522, 36.133887],
    [2.929514, 36.13391],
    [2.929507, 36.13393],
    [2.929474, 36.133968],
    [2.929429, 36.133995],
    [2.929374, 36.134009],
    [2.929316, 36.134008],
    [2.929261, 36.133991],
    [2.928838, 36.134098],
    [2.928625, 36.13421],
    [2.928263, 36.13439],
    [2.926939, 36.135132],
    [2.926006, 36.135691],
    [2.925727, 36.135851],
    [2.925351, 36.136046],
    [2.924994, 36.136223],
    [2.924699, 36.136375],
    [2.924461, 36.136519],
    [2.924118, 36.136765],
    [2.923597, 36.137108],
    [2.923122, 36.137421],
    [2.922546, 36.137801],
    [2.921827, 36.138303],
    [2.921677, 36.138433],
    [2.921484, 36.138615],
    [2.920815, 36.13939],
    [2.920734, 36.139475],
    [2.920625, 36.13959],
    [2.920414, 36.139788],
    [2.920314, 36.139852],
    [2.920271, 36.139846],
    [2.919955, 36.139816],
    [2.919694, 36.139792],
    [2.919544, 36.139783],
    [2.919426, 36.139785],
    [2.919209, 36.139838],
    [2.919147, 36.139859],
    [2.919083, 36.139854],
    [2.919019, 36.13987],
    [2.918898, 36.139909],
    [2.918793, 36.139967],
    [2.918673, 36.14006],
    [2.918413, 36.140314],
    [2.917574, 36.141124],
    [2.916091, 36.142544],
    [2.915753, 36.142811],
    [2.915387, 36.143044],
    [2.915111, 36.143178],
    [2.91508, 36.143191],
    [2.914413, 36.143468],
    [2.912782, 36.144121],
    [2.912412, 36.14425],
    [2.91198, 36.144369],
    [2.910363, 36.144752],
    [2.909564, 36.144968],
    [2.909315, 36.145057],
    [2.909243, 36.145079],
    [2.909166, 36.14508],
    [2.908867, 36.145086],
    [2.908667, 36.145127],
    [2.907647, 36.145408],
    [2.907569, 36.145436],
    [2.906943, 36.145663],
    [2.906419, 36.145918],
    [2.906031, 36.14614],
    [2.905353, 36.146544],
    [2.904097, 36.147297],
    [2.903084, 36.147837],
    [2.902628, 36.148056],
    [2.902213, 36.148293],
    [2.9019, 36.148536],
    [2.901742, 36.148697],
    [2.901675, 36.148767],
    [2.90142, 36.149152],
    [2.901282, 36.149389],
    [2.901226, 36.149486],
    [2.901213, 36.14951],
    [2.901054, 36.149775],
    [2.900908, 36.150019],
    [2.900529, 36.150666],
    [2.900193, 36.151163],
    [2.900055, 36.151351],
    [2.900028, 36.151383],
    [2.899908, 36.151523],
    [2.899644, 36.151858],
    [2.899532, 36.151991],
    [2.899028, 36.152588],
    [2.898937, 36.152777],
    [2.898922, 36.152842],
    [2.898905, 36.15292],
    [2.89891, 36.153114],
    [2.898937, 36.153318],
    [2.898995, 36.153556],
    [2.899242, 36.154266],
    [2.899237, 36.154414],
    [2.899173, 36.154609],
    [2.89899, 36.154899],
    [2.898604, 36.155293],
    [2.898427, 36.15539],
    [2.898213, 36.155449],
    [2.897955, 36.155475],
    [2.897692, 36.155466],
    [2.897478, 36.155397],
    [2.897285, 36.155272],
    [2.897172, 36.155146],
    [2.897102, 36.15502],
    [2.897081, 36.154868],
    [2.897091, 36.154717],
    [2.897129, 36.154544],
    [2.897204, 36.154415],
    [2.89788, 36.153638],
    [2.89799, 36.153519],
    [2.898292, 36.153127],
    [2.898373, 36.152907],
    [2.898369, 36.152754],
    [2.89832, 36.152615],
    [2.898182, 36.152495],
    [2.898034, 36.152401],
    [2.897773, 36.152372],
    [2.897477, 36.152424],
    [2.897318, 36.152507],
    [2.897199, 36.152667],
    [2.897148, 36.152835],
    [2.897158, 36.152964],
    [2.897184, 36.15306],
    [2.897279, 36.153234],
    [2.897459, 36.153469],
    [2.897998, 36.153924],
    [2.898831, 36.154614],
    [2.89992, 36.155558],
    [2.900374, 36.155948],
    [2.900895, 36.156397],
    [2.901367, 36.156848],
    [2.901673, 36.157198],
    [2.901898, 36.157524],
    [2.902037, 36.157809],
    [2.902123, 36.158152],
    [2.902209, 36.158593],
    [2.90222, 36.159031],
    [2.902193, 36.159351],
    [2.902107, 36.159737],
    [2.901995, 36.160075],
    [2.901855, 36.160365],
    [2.901646, 36.160746],
    [2.901394, 36.161148],
    [2.900873, 36.161954],
    [2.900283, 36.162898],
    [2.900048, 36.163336],
    [2.899839, 36.16379],
    [2.899699, 36.164202],
    [2.899592, 36.16473],
    [2.899463, 36.165488],
    [2.899356, 36.16586],
    [2.899206, 36.16622],
    [2.899002, 36.166584],
    [2.898739, 36.166943],
    [2.898476, 36.167199],
    [2.898294, 36.167346],
    [2.898079, 36.167514],
    [2.897624, 36.16781],
    [2.897061, 36.168097],
    [2.894709, 36.169246],
    [2.894305, 36.169474],
    [2.893973, 36.169688],
    [2.893765, 36.169846],
    [2.893515, 36.170044],
    [2.893177, 36.170369],
    [2.892956, 36.17061],
    [2.89251, 36.171182],
    [2.892291, 36.171589],
    [2.892119, 36.171942],
    [2.89198, 36.172235],
    [2.891846, 36.172794],
    [2.891798, 36.173326],
    [2.891771, 36.173798],
    [2.891765, 36.174158],
    [2.891795, 36.175335],
    [2.891889, 36.176795],
    [2.891991, 36.177826],
    [2.892087, 36.178432],
    [2.892277, 36.17934],
    [2.892452, 36.180302],
    [2.892463, 36.180566],
    [2.892436, 36.180848],
    [2.892382, 36.181121],
    [2.89228, 36.181424],
    [2.892146, 36.181705],
    [2.891974, 36.181982],
    [2.891722, 36.18229],
    [2.89132, 36.182809],
    [2.89096, 36.183316],
    [2.890682, 36.183753],
    [2.89051, 36.18416],
    [2.890413, 36.184567],
    [2.890408, 36.184896],
    [2.890445, 36.185321],
    [2.890564, 36.185728],
    [2.890762, 36.186148],
    [2.891177, 36.186788],
    [2.892252, 36.188692],
    [2.892428, 36.189114],
    [2.89249, 36.189453],
    [2.892508, 36.1898],
    [2.892463, 36.190247],
    [2.892369, 36.190658],
    [2.892205, 36.191096],
    [2.892017, 36.191477],
    [2.891786, 36.191767],
    [2.891491, 36.192079],
    [2.89102, 36.192433],
    [2.890611, 36.192767],
    [2.890296, 36.193056],
    [2.889991, 36.193435],
    [2.889802, 36.193731],
    [2.889716, 36.193921],
    [2.889354, 36.194841],
    [2.889138, 36.195276],
    [2.888806, 36.195811],
    [2.888448, 36.196331],
    [2.888083, 36.196928],
    [2.886851, 36.199581],
    [2.886518, 36.200161],
    [2.886219, 36.200611],
    [2.88588, 36.201032],
    [2.885366, 36.201525],
    [2.884856, 36.202066],
    [2.884137, 36.202801],
    [2.883277, 36.203668],
    [2.881503, 36.205334],
    [2.88079, 36.206098],
    [2.880293, 36.206582],
    [2.879791, 36.207116],
    [2.879279, 36.207642],
    [2.878853, 36.208188],
    [2.878502, 36.208768],
    [2.878222, 36.209401],
    [2.878094, 36.209802],
    [2.877981, 36.210262],
    [2.877904, 36.210861],
    [2.877929, 36.211382],
    [2.87799, 36.211894],
    [2.878098, 36.212471],
    [2.878252, 36.21297],
    [2.878396, 36.213367],
    [2.8786, 36.213792],
    [2.87885, 36.214291],
    [2.879474, 36.215584],
    [2.879604, 36.21582],
    [2.880155, 36.217115],
    [2.880427, 36.21783],
    [2.880577, 36.21825],
    [2.880687, 36.218594],
    [2.880782, 36.218939],
    [2.880805, 36.219144],
    [2.880831, 36.219754],
    [2.880813, 36.220198],
    [2.880759, 36.220687],
    [2.88067, 36.221168],
    [2.880539, 36.221641],
    [2.880381, 36.222055],
    [2.880175, 36.222478],
    [2.879934, 36.222852],
    [2.879666, 36.223232],
    [2.879323, 36.223669],
    [2.879121, 36.223904],
    [2.878858, 36.224163],
    [2.878636, 36.224345],
    [2.877668, 36.224934],
    [2.876059, 36.225965],
    [2.875751, 36.226184],
    [2.875523, 36.226371],
    [2.875302, 36.226579],
    [2.8751, 36.226797],
    [2.874903, 36.227044],
    [2.874672, 36.227397],
    [2.874497, 36.227728],
    [2.874358, 36.228109],
    [2.874267, 36.228465],
    [2.874217, 36.228807],
    [2.87388, 36.231797],
    [2.87364, 36.233158],
    [2.873497, 36.233664],
    [2.873362, 36.23405],
    [2.873239, 36.234338],
    [2.873001, 36.234773],
    [2.872654, 36.235276],
    [2.872267, 36.235684],
    [2.871785, 36.236059],
    [2.871272, 36.236365],
    [2.870684, 36.236644],
    [2.869921, 36.236882],
    [2.869127, 36.237026],
    [2.867898, 36.237117],
    [2.865651, 36.237202],
    [2.864949, 36.237267],
    [2.864252, 36.237382],
    [2.863637, 36.237542],
    [2.863331, 36.237651],
    [2.863053, 36.237751],
    [2.862302, 36.238102],
    [2.861802, 36.238357],
    [2.861449, 36.238566],
    [2.860946, 36.238861],
    [2.860526, 36.239144],
    [2.860259, 36.239359],
    [2.85878, 36.240899],
    [2.858388, 36.241269],
    [2.857909, 36.241651],
    [2.857478, 36.241925],
    [2.856987, 36.242193],
    [2.856167, 36.242572],
    [2.851429, 36.244435],
    [2.84753, 36.245931],
    [2.846784, 36.24619],
    [2.845668, 36.246563],
    [2.844932, 36.246852],
    [2.844308, 36.247132],
    [2.843549, 36.247415],
    [2.843173, 36.247544],
    [2.842813, 36.247652],
    [2.842353, 36.247756],
    [2.841865, 36.247856],
    [2.841328, 36.247927],
    [2.840617, 36.247998],
    [2.839934, 36.248037],
    [2.839301, 36.248101],
    [2.838336, 36.248306],
    [2.837553, 36.248503],
    [2.836867, 36.248761],
    [2.836513, 36.248894],
    [2.836172, 36.249035],
    [2.835304, 36.249533],
    [2.834601, 36.249972],
    [2.834007, 36.250433],
    [2.833192, 36.251103],
    [2.832682, 36.251566],
    [2.831357, 36.252912],
    [2.830749, 36.253456],
    [2.830324, 36.253815],
    [2.829933, 36.254091],
    [2.82946, 36.254378],
    [2.828854, 36.254665],
    [2.828261, 36.254913],
    [2.827377, 36.255227],
    [2.826767, 36.255398],
    [2.826118, 36.255525],
    [2.825518, 36.255592],
    [2.824746, 36.255631],
    [2.824386, 36.255652],
    [2.823983, 36.255707],
    [2.823599, 36.255785],
    [2.823231, 36.255875],
    [2.822551, 36.256089],
    [2.82178, 36.256424],
    [2.821552, 36.256548],
    [2.82132, 36.256694],
    [2.820909, 36.256954],
    [2.820395, 36.257381],
    [2.820086, 36.257733],
    [2.819602, 36.258293],
    [2.819189, 36.258726],
    [2.818743, 36.259198],
    [2.818181, 36.259678],
    [2.817529, 36.260116],
    [2.817169, 36.260394],
    [2.816653, 36.260879],
    [2.816414, 36.261147],
    [2.816282, 36.261345],
    [2.816145, 36.261618],
    [2.816054, 36.261919],
    [2.816014, 36.26223],
    [2.816022, 36.262524],
    [2.816086, 36.263136],
    [2.816093, 36.263321],
    [2.81606, 36.263504],
    [2.816006, 36.264032],
    [2.815965, 36.264261],
    [2.815946, 36.264354],
    [2.815902, 36.264577],
    [2.815841, 36.264797],
    [2.815683, 36.26506],
    [2.815484, 36.265304],
    [2.815314, 36.265473],
    [2.81515, 36.265604],
    [2.814503, 36.266091],
    [2.814475, 36.26613],
    [2.814434, 36.26616],
    [2.814384, 36.266178],
    [2.814329, 36.266184],
    [2.814266, 36.266173],
    [2.814211, 36.266146],
    [2.814194, 36.266132],
    [2.814038, 36.26611],
    [2.813915, 36.266112],
    [2.813667, 36.266146],
    [2.813254, 36.266298],
    [2.813173, 36.266328],
    [2.812613, 36.266471],
    [2.812173, 36.266547],
    [2.811808, 36.266592],
    [2.81142, 36.266629],
    [2.81097, 36.266644],
    [2.810469, 36.26664],
    [2.809998, 36.266619],
    [2.809643, 36.266582],
    [2.809461, 36.266547],
    [2.809417, 36.266538],
    [2.809201, 36.266479],
    [2.808995, 36.266401],
    [2.808565, 36.266183],
    [2.808191, 36.26597],
    [2.807774, 36.265732],
    [2.807471, 36.265583],
    [2.807251, 36.265492],
    [2.807048, 36.265422],
    [2.806851, 36.26538],
    [2.806293, 36.2653],
    [2.806086, 36.265263],
    [2.805873, 36.26521],
    [2.805596, 36.265108],
    [2.80509, 36.264853],
    [2.80385, 36.264203],
    [2.803579, 36.264084],
    [2.80335, 36.26401],
    [2.803017, 36.263942],
    [2.802551, 36.263857],
    [2.802317, 36.263795],
    [2.802125, 36.263721],
    [2.801986, 36.263645],
    [2.80116, 36.26306],
    [2.800629, 36.262725],
    [2.800436, 36.262633],
    [2.800243, 36.26257],
    [2.799995, 36.262523],
    [2.799741, 36.262504],
    [2.799513, 36.26252],
    [2.799274, 36.262555],
    [2.798901, 36.262665],
    [2.798596, 36.26277],
    [2.798359, 36.262852],
    [2.797476, 36.263187],
    [2.797154, 36.263326],
    [2.7969, 36.263447],
    [2.796507, 36.263655],
    [2.79594, 36.263986],
    [2.795523, 36.264237],
    [2.795201, 36.264403],
    [2.794849, 36.264564],
    [2.794937, 36.264816],
    [2.794975, 36.264903],
  ],
];
const objectArray = arr[0].map((coord) => {
  return { longitude: coord[0], latitude: coord[1] };
});
console.log(objectArray);
// console.log(arr[0]);