import http from 'k6/http';
import { sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('error'); // custom metric

export let options = {
    vus: 100,
    duration: '1m',
    // thresholds: {
    //     'error': ['rate < 0.01'], // we want the errors to be less than 1%
    //     'http_req_duration': ['p(95)<500'] // 95% of reqs should complete within 500ms
    // }
};

export default function () {
    let response = http.get('http://[::1]:5000/api/v1/todos');
    

    let success = response.status === 200;
    errorRate.add(!success);

    sleep(1 / 100); // simulate ~100 requests per second
}
