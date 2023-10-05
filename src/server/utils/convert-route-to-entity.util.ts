const mapping: Record<string, string> = {
  contents: 'content',
  lessons: 'lesson',
  startups: 'startup',
  stories: 'story',
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
