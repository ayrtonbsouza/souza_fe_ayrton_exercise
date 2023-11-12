import { type Teams, type TeamOverview, type UserData } from 'types';

const getData = async (path = ''): Promise<any> => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/${path}`;
  const res = await fetch(url);
  const json = await res.json();

  return json;
};

export const getTeams = async (): Promise<Teams[]> => await getData('teams');

export const getTeamOverview = async (teamId: string): Promise<TeamOverview> =>
  await getData(`teams/${teamId}`);

export const getUserData = async (userId: string): Promise<UserData> =>
  await getData(`users/${userId}`);
