import http from '../interceptor';

export const getStatistic = (date) => http.get(`/statistic?date=${date}`);
export const createVote = (number) => http.post('/vote', number);
export const getLogs = (data) => http.post('/logs', data);