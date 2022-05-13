import fetch from "node-fetch";

const checkSamsClub = async () => {
  try {
    const res = await fetch(
      "https://www.samsclub.com/api/node/vivaldi/browse/v2/products",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          withdeliveryoffer: "true",
          cookie:
            "SSLB=1; SSID1=CQB2ah0AAAAAAADWhn5ivN4BJtaGfmIBAAAAAAAAAAAA1oZ-YgBjBg; SSSC1=362.G7097258317101260476.1|0.0; az-reg=wus; SSRT1=14Z-YgADAA; sxp-rl-SAT_PARITY_NEPSAT-rn=15; sxp-rl-SAT_WMSP_SBA-rn=92; sxp-rl-SAT_OD_PP-rn=2; sxp-rl-SAT_ADA_CLUB_ORDERS-rn=90; sxp-rl-SAT_DFC2-rn=67; sxp-rl-SAT_SKIP_ATG_LOGOUT-rn=6; sxp-rl-SAT_CART_SUBSTITUTIONS-rn=48; sxp-rl-SAT_SORS_RET-rn=48; sxp-rl-SAT_WMSP_INGRID-rn=61; sxp-rl-SAT_WMSP_P13N-rn=67; sxp-rl-SAT_ENABLE_INSTOCK_ALERTS-rn=49; sxp-rl-SAT_PASS_ENHANCEMENT-rn=88; sxp-rl-SAT_WMSP_CAT-rn=1; AUTOSELECTCLUB=1; sxp-rl-SAT_ADA_CLUB_ORDERS-c=r|1|100; SAT_ADA_CLUB_ORDERS=1; sxp-rl-SAT_CART_SUBSTITUTIONS-c=r|1|50; SAT_CART_SUBSTITUTIONS=1; sxp-rl-SAT_ENABLE_INSTOCK_ALERTS-c=r|1|10; sxp-rl-SAT_OD_PP-c=r|1|100; SAT_OD_PP=1; sxp-rl-SAT_PARITY_NEPSAT-c=r|1|50; sxp-rl-SAT_PASS_ENHANCEMENT-c=r|1|0; SAT_PASS_ENHANCEMENT=0; sxp-rl-SAT_SKIP_ATG_LOGOUT-c=r|1|100; SAT_SKIP_ATG_LOGOUT=1; sxp-rl-SAT_SORS_RET-c=r|1|100; SAT_SORS_RET=1; sxp-rl-SAT_WMSP_CAT-c=r|1|50; SAT_WMSP_CAT=1; sxp-rl-SAT_WMSP_INGRID-c=r|1|50; SAT_WMSP_INGRID=0; sxp-rl-SAT_WMSP_P13N-c=r|1|50; sxp-rl-SAT_WMSP_SBA-c=r|1|50; sxp-rl-SAT_DFC2-c=r|1|100; SAT_DFC2=1; SAT_WMSP_P13N=0; bstc=d-_av6FhwEr2784foKAFrA; SAT_WMSP_SBA=0; SAT_ENABLE_INSTOCK_ALERTS=0; SAT_PARITY_NEPSAT=1; vtc=d-_av6FhwEr2784foKAFrA; acstkn=113:6#313461200#7=466275003_1652459224061; astract=ca-a03159a3-6378-420b-887f-76a2b42e2b5b; ak_bmsc=E6B3647C2927F5183AE12965854D9CEE~000000000000000000000000000000~YAAQzU9DF2r6QJeAAQAAVbw+vg/o9z8IZQES0F6XJF+puRMcekezRE+x+1wMvzgTKcLSj8BQW6kYUx/F7ryFU/6Mel05CBacebLZ3Pkc0/OdKoPAe4XVHuXpiNmHyYspWxaPAQsDvl9LE+zDW0hIAaf4HIeQyyLeWKJQPuoo67IjO+9BDtUPiGbknhec19ZQc60BeUj40pM8YcxJ25Tv3yMEhbEuC7pgbNCEQztAS0vIIwS067vq8VQqsGlUhKHLDyD/5LCSE2wpe3Cr1h10dxc0PGxj1IQlTUu5mJ6vy2xOripUUZ3AuksmoVF9hW9XUrp+9PaJWld5EOQw6p5jmgKO7srLdzynHEYYTHxiqJdBy+wN7ffMsQwyzrOrfSEyyY2Auy8sWhvy6rjOxgomK52gnzJ4DP/aqkHbocLW4KTeduNXDwdbD99tW7TeTwjN+zyPViXkCLk8h4UL6hGqnu++hckCjuM1mbOegwCh87fUFynuXtgcKYUQFg==; AMCVS_B98A1CFE53309C340A490D45%40AdobeOrg=1; s_ecid=MCMID%7C77511211525975316714319446367910202767; AMCV_B98A1CFE53309C340A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C19126%7CMCMID%7C77511211525975316714319446367910202767%7CMCAAMLH-1653064024%7C9%7CMCAAMB-1653064024%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1652466424s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.0; s_cc=true; pxcts=866f3d7b-d2d9-11ec-9da2-51724b485276; _pxvid=866f30ad-d2d9-11ec-9da2-51724b485276; _gcl_au=1.1.423630555.1652459225; _px3=f0869eaddc1423f49ee8a2ac7c94e9fae2df8bf5395da6326b28656ebd9dbeba:ZoMeX32kuN7TDaIP5TQbacupGDmNWGEtE0UDVbMJJ6KkeDbm0/xWg0t5FI5zWGjCfbf11u83ondtlTbaN814ng==:1000:4TNuoYy7qsnCXNYHtaz0i2OICwazMvmmwbiL2ycB/NVhDgwpNu0v59WvntmD8I3f0BIGJAE9ISJzmBZnjqwSgWuFl24gjWONLUr9cephmHy4QCGRlAokwz6XJxfUa8oXwOdHbJfZ7KTny4Ex4+1ooiyHvE9eKyKMG1LTm2ie68JKKGSb0gR6g0SjE0NGSclnyi/3Jwj296p4T7b/uc2kdQ==; _mibhv=anon-1652459228997-5018809839_4591; rmStore=dmid:8096; _br_uid_2=uid%3D4788815926854%3Av%3D13.0%3Ats%3D1652459229311%3Ahc%3D1; TS0171ed6c=01538efd7cf35fae18357d545d194d4a36fef06e7d2f7d0b6f64521093562ca69c4a4068b0c54e1939397cca41630ec98a1b06f30c; samsathrvi=RVI~prod22400507; cto_bundle=srdgm19FMWtFbEVsRDBkSDVWVHhzUTdkaWtNWnJoa2JnZVQ0Q2FtcXdsZjdyMjlxb1VMVnlZNkJCbnFyeVJMQzc2a2IlMkJEeGgxVThZd1VHMkdHR2poV2MxJTJCdzRNMGwlMkZHNWRlM1FjT29HJTJCQnIlMkZaQlZHWGlGUVRvMzFvMlBZS2NMRUYzakZLaG83S1NpZzRCaHQzbE9ld2NyNTNmcVI2bDRQb2N1U2FFNHViQWs5S3puUXdGRm9mT0xyRXpKaWZjRFFFbXM3VFJnbG9sNHpZVnlPVUxNOW9rQ0paZyUzRCUzRA; salsify_session_id=ec5ab59b-1fef-4a66-8db5-9f6303007dc0; bv_segment=%7B%22testId%22%3A%22test_SamsClub_05052022%22%2C%22segment%22%3A%22RRIPS_LEGACY%22%7D; BVImplmain_site=1337; NoCookie=true; BVBRANDID=8ce20b3c-fdc9-448c-83d0-f7a3575d05cf; BVBRANDSID=f92218b6-2126-403b-b49e-9bebf2080f0b; rcs=eF5j4cotK8lMETA0NzbTNdQ1ZClN9kg2tEwxszBK0k22tEzUNTFKTdZNtkgz0E0zNjMwSrNIs0g2MwMAmvEOrA; smtrrmkr=637880560311834450%5E0180be3e-d7cf-48c4-9d07-2d7967eb0e32%5E0180be3e-d7cf-4e8b-bb38-c9497f711fb4%5E0%5E73.98.131.90; inptime0_859_us=0; flixgvid=flixb312cb58000000.62248345; _uetsid=88c1fbb0d2d911ecbddb67a749069336; _uetvid=88c25880d2d911ecb51b891a70c5a0a6; s_sq=samclub3prod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dpdp%25253Amembers-mark-gentle-baby-formula-powder-48-oz%2526link%253DAdd%252520to%252520list%2526region%253Dmain%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dpdp%25253Amembers-mark-gentle-baby-formula-powder-48-oz%2526pidt%253D1%2526oid%253DfunctionUr%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DBUTTON; TS01bc32b7=01538efd7c3ab14b277d1a857484d3558a6eda9355ebaca41289077709ee6425704aa573e03ebdcce6238d2a4b143b8964096fe3b0; seqnum=11; akavpau_P1_Sitewide=1652459878~id=66451763391eabb7a3ccf52a8a2c3eac; bm_sv=FB543F5F856F337E1526F7343049E91A~YAAQzU9DFy0EQZeAAQAAtZE/vg+dPIb59pGtcXUx1WvWizTZPeRLSf2wFuQaGNcG8wv4KH9mNTXbayaWH7ji8I0cZkbveR8K33LlEDMYEacTJlrNnsgsGrTXWPVJ6Bm9wT7eiyMZE1KOvQaAQ1G2LoH3YG2NaFYIGZf/rQa07w9kAPvSbvXv5U7dGM/S8xCjDTz8eNHL3Of44jd061TnWwRMWmLEkSUhjm8HPkTgf4rdAGOVjPqak6HHuNDf9B0vx24E~1",
          Referer:
            "https://www.samsclub.com/p/member-s-mark-gentle-baby-formula-powder-48-oz/prod22400507",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: '{"productIds":["prod22400507"],"type":"LARGE","clubId":4718}',
        method: "POST",
      }
    );

    const data = await res.json();
    const isInStock = {
      store: data.payload.products[0].skus[0].clubOffer.inventory.qtyLeft > 0,
      online:
        data.payload.products[0].skus[0].onlineOffer.inventory.qtyLeft > 0,
    };

    return isInStock;
  } catch (error) {
    console.log(error);
  }
};

export { checkSamsClub };
