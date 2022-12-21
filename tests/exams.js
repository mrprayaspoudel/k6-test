import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "./utils.js";
import { randomIntBetween } from "./k6-utils.js";
import { BASE_URL } from "./constants.js";
import { EXAM_ENDPOINT } from "./constants.js";


const headers = {
    // accept: "application/json, text/javascript, */*; q=0.01",
    // "accept-encoding": "gzip, deflate",
    // "accept-language": "en-US,en;q=0.9",
    // connection: "keep-alive",
    // "content-type": "application/x-www-form-urlencoded;type=content-type;mimeType=application/x-www-form-urlencoded",
    // host: "ecommerce.test.k6.io",
    // origin: "http://ecommerce.test.k6.io",
    // "x-requested-with": "XMLHttpRequest",
};

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<250'], // 95% of requests should be below 250ms
  },
  stages: [
    { duration: '30s', target: 20 },   // simulate ramp-up of traffic from 1 to 20 users over 30 seconds.
    { duration: '1m30s', target: 10 }, // ramp-down to 10 users over 1 min and 30 sec
    { duration: '20s', target: 0 },    // ramp-down to 0 users
  ],
};


export default function exams() {
  group("Get all exams", function () {
    const response = http.get(BASE_URL + EXAM_ENDPOINT);

    checkStatus({
      response: response,
      expectedStatus: 200,
      failOnError: true,
      printOnError: true
    });

    if(res.timings.duration > 250)
        console.log('The response is longer than expected - Response time was ' + String(res.timings.duration) + ' ms');

  });

  sleep(randomIntBetween(pauseMin, pauseMax));
}