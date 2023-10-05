import queryString from 'query-string';
import { StoryInterface, StoryGetQueryInterface } from 'interfaces/story';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getStories = async (query?: StoryGetQueryInterface): Promise<PaginatedInterface<StoryInterface>> => {
  return fetcher('/api/stories', {}, query);
};

export const createStory = async (story: StoryInterface) => {
  return fetcher('/api/stories', { method: 'POST', body: JSON.stringify(story) });
};

export const updateStoryById = async (id: string, story: StoryInterface) => {
  return fetcher(`/api/stories/${id}`, { method: 'PUT', body: JSON.stringify(story) });
};

export const getStoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/stories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteStoryById = async (id: string) => {
  return fetcher(`/api/stories/${id}`, { method: 'DELETE' });
};
