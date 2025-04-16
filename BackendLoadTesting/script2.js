import http from 'k6/http';




export let options = {
     stages: [
        {duration: '10s', target: 1000},
        {duration: '30s', target: 5000},
        {duration: '30s', target: 5000},
        {duration: '10s', target: 100},
     ]
};

export default function () {
   http.get('http://[::1]:5000/api/v1/todos');

}
