import apiClient from './apiClient';

export async function getPlans() {
  const response = await apiClient.get('/plans');
  return response.data;
}

export async function getPlan(id) {
  const response = await apiClient.get(`/plans/${id}`);
  return response.data;
}
