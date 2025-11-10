export interface GoogleMapsStation {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  rating: number
  prices?: Record<string, number>
}

export const khorezmStations: GoogleMapsStation[] = [
  {
    "id": "station-1",
    "name": "Urganch Yoqilg‘i Shoxobchasi",
    "address": "Urganch sh., Al-Xorazmiy ko‘chasi",
    "lat": 41.5507,
    "lng": 60.6312,
    "rating": 3.8,
    "prices": {
      "AI80": 7500,
      "AI92": 9500,
      "Dizel": 10200
    }
  },
  {
    "id": "station-2",
    "name": "Xonqa Gaz AYoQSh",
    "address": "Xonqa tumani, Mustaqillik MFY",
    "lat": 41.4782,
    "lng": 60.8565,
    "rating": 4.0,
    "prices": {
      "AI80": 7510,
      "AI92": 9515,
      "Dizel": 10220
    }
  },
  {
    "id": "station-3",
    "name": "Shovot Petrol",
    "address": "Shovot tumani, Markaz",
    "lat": 41.2935,
    "lng": 60.6012,
    "rating": 4.2,
    "prices": {
      "AI80": 7520,
      "AI92": 9530,
      "Dizel": 10240
    }
  },
  {
    "id": "station-4",
    "name": "Gurlan Station",
    "address": "Gurlan sh., Sho‘ro ko‘chasi",
    "lat": 41.6489,
    "lng": 60.5301,
    "rating": 4.4,
    "prices": {
      "AI80": 7530,
      "AI92": 9545,
      "Dizel": 10260
    }
  },
  {
    "id": "station-5",
    "name": "Khiva Petro",
    "address": "Khiva sh., Irgaliq yo‘li",
    "lat": 41.382,
    "lng": 60.3644,
    "rating": 4.6,
    "prices": {
      "AI80": 7540,
      "AI92": 9560,
      "Dizel": 10280
    }
  },
  {
    "id": "station-6",
    "name": "Yangibozor Fuel",
    "address": "Yangibozor tumani, Sentral",
    "lat": 41.0669,
    "lng": 60.634,
    "rating": 4.8,
    "prices": {
      "AI80": 7550,
      "AI92": 9575,
      "Dizel": 10300
    }
  },
  {
    "id": "station-7",
    "name": "Asaka Gaz",
    "address": "Asaka",
    "lat": 41.8,
    "lng": 60.7,
    "rating": 5.0,
    "prices": {
      "AI80": 7560,
      "AI92": 9590,
      "Dizel": 10320
    }
  },
  {
    "id": "station-8",
    "name": "Khamkor Petrol",
    "address": "Khamkor MFY, Urganch",
    "lat": 41.556,
    "lng": 60.64,
    "rating": 3.8,
    "prices": {
      "AI80": 7570,
      "AI92": 9605,
      "Dizel": 10340
    }
  },
  {
    "id": "station-9",
    "name": "Sulton Station",
    "address": "Sulton ko‘chasi, Urganch",
    "lat": 41.549,
    "lng": 60.628,
    "rating": 4.0,
    "prices": {
      "AI80": 7580,
      "AI92": 9620,
      "Dizel": 10360
    }
  },
  {
    "id": "station-10",
    "name": "Oqtepa Gas",
    "address": "Oqtepa tumani markazi",
    "lat": 41.6,
    "lng": 60.75,
    "rating": 4.2,
    "prices": {
      "AI80": 7590,
      "AI92": 9635,
      "Dizel": 10380
    }
  },
  {
    "id": "station-11",
    "name": "Beshariq Petrol",
    "address": "Beshariq maydoni",
    "lat": 41.4,
    "lng": 60.5,
    "rating": 4.4,
    "prices": {
      "AI80": 7600,
      "AI92": 9650,
      "Dizel": 10400
    }
  },
  {
    "id": "station-12",
    "name": "Zarafshan Pump",
    "address": "Zarafshon yo‘li, Urganch",
    "lat": 41.565,
    "lng": 60.61,
    "rating": 4.6,
    "prices": {
      "AI80": 7610,
      "AI92": 9665,
      "Dizel": 10420
    }
  },
  {
    "id": "station-13",
    "name": "Navbahor Fuel",
    "address": "Navbahor ko‘chasi",
    "lat": 41.57,
    "lng": 60.62,
    "rating": 4.8,
    "prices": {
      "AI80": 7620,
      "AI92": 9680,
      "Dizel": 10440
    }
  },
  {
    "id": "station-14",
    "name": "Mustaqillik Petrol",
    "address": "Mustaqillik sh., Xonqa",
    "lat": 41.48,
    "lng": 60.86,
    "rating": 5.0,
    "prices": {
      "AI80": 7630,
      "AI92": 9695,
      "Dizel": 10460
    }
  },
  {
    "id": "station-15",
    "name": "Olmozor Gas",
    "address": "Olmozor MFY",
    "lat": 41.54,
    "lng": 60.635,
    "rating": 3.8,
    "prices": {
      "AI80": 7640,
      "AI92": 9710,
      "Dizel": 10480
    }
  },
  {
    "id": "station-16",
    "name": "Sovet Petrol",
    "address": "Sovet tumani",
    "lat": 41.5,
    "lng": 60.65,
    "rating": 4.0,
    "prices": {
      "AI80": 7650,
      "AI92": 9725,
      "Dizel": 10500
    }
  },
  {
    "id": "station-17",
    "name": "Markaziy Gaz",
    "address": "Markaziy bozori yonida",
    "lat": 41.552,
    "lng": 60.632,
    "rating": 4.2,
    "prices": {
      "AI80": 7660,
      "AI92": 9740,
      "Dizel": 10520
    }
  },
  {
    "id": "station-18",
    "name": "Istiqlol Station",
    "address": "Istiqlol ko‘chasi",
    "lat": 41.558,
    "lng": 60.638,
    "rating": 4.4,
    "prices": {
      "AI80": 7670,
      "AI92": 9755,
      "Dizel": 10540
    }
  },
  {
    "id": "station-19",
    "name": "Guliston Pump",
    "address": "Guliston MFY markazi",
    "lat": 41.562,
    "lng": 60.645,
    "rating": 4.6,
    "prices": {
      "AI80": 7680,
      "AI92": 9770,
      "Dizel": 10560
    }
  },
  {
    "id": "station-20",
    "name": "Sabir Station",
    "address": "Sabir yo‘li",
    "lat": 41.5405,
    "lng": 60.6221,
    "rating": 4.8,
    "prices": {
      "AI80": 7690,
      "AI92": 9785,
      "Dizel": 10580
    }
  },
  {
    "id": "station-21",
    "name": "Hilol Fuel",
    "address": "Hilol MFY",
    "lat": 41.5455,
    "lng": 60.6299,
    "rating": 5.0,
    "prices": {
      "AI80": 7700,
      "AI92": 9800,
      "Dizel": 10600
    }
  },
  {
    "id": "station-22",
    "name": "Nur Petrol",
    "address": "Nur ko‘chasi",
    "lat": 41.5533,
    "lng": 60.6333,
    "rating": 3.8,
    "prices": {
      "AI80": 7710,
      "AI92": 9815,
      "Dizel": 10620
    }
  },
  {
    "id": "station-23",
    "name": "Jondor Station",
    "address": "Jondor tumani markazi",
    "lat": 41.0,
    "lng": 60.4,
    "rating": 4.0,
    "prices": {
      "AI80": 7720,
      "AI92": 9830,
      "Dizel": 10640
    }
  },
  {
    "id": "station-24",
    "name": "Xiva East Pump",
    "address": "Xiva sh. sharq",
    "lat": 41.3825,
    "lng": 60.37,
    "rating": 4.2,
    "prices": {
      "AI80": 7730,
      "AI92": 9845,
      "Dizel": 10660
    }
  },
  {
    "id": "station-25",
    "name": "Tuproqchi Fuel",
    "address": "Tuproqchi yo‘li",
    "lat": 41.61,
    "lng": 60.7,
    "rating": 4.4,
    "prices": {
      "AI80": 7740,
      "AI92": 9860,
      "Dizel": 10680
    }
  },
  {
    "id": "station-26",
    "name": "Mirzaabad Station",
    "address": "Mirzaobod MFY",
    "lat": 41.52,
    "lng": 60.6,
    "rating": 4.6,
    "prices": {
      "AI80": 7750,
      "AI92": 9875,
      "Dizel": 10700
    }
  },
  {
    "id": "station-27",
    "name": "Qo‘shko‘pir Pump",
    "address": "Qo‘shko‘pir markazi",
    "lat": 41.7,
    "lng": 60.8,
    "rating": 4.8,
    "prices": {
      "AI80": 7760,
      "AI92": 9890,
      "Dizel": 10720
    }
  },
  {
    "id": "station-28",
    "name": "Chimboy Fuel",
    "address": "Chimboy tumani",
    "lat": 41.42,
    "lng": 60.54,
    "rating": 5.0,
    "prices": {
      "AI80": 7770,
      "AI92": 9905,
      "Dizel": 10740
    }
  },
  {
    "id": "station-29",
    "name": "Sardoba Station",
    "address": "Sardoba ko‘chasi",
    "lat": 41.58,
    "lng": 60.66,
    "rating": 3.8,
    "prices": {
      "AI80": 7780,
      "AI92": 9920,
      "Dizel": 10760
    }
  },
  {
    "id": "station-30",
    "name": "Tongox Petrol",
    "address": "Tongox shaharchasi",
    "lat": 41.59,
    "lng": 60.67,
    "rating": 4.0,
    "prices": {
      "AI80": 7790,
      "AI92": 9935,
      "Dizel": 10780
    }
  }
];

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
