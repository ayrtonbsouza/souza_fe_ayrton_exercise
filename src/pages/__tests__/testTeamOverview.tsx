import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import * as API from '../../api';
import TeamOverview from '../TeamOverview';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      teamName: 'Some Team',
    },
  }),
  useNavigate: () => ({}),
  useParams: () => ({
    teamId: '1',
  }),
}));

describe('TeamOverview', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render team overview users', async () => {
    const teamOverview = {
      id: '1',
      teamLeadId: '2',
      teamMemberIds: ['3', '4', '5'],
    };

    const userData = {
      id: '2',
      firstName: 'userData',
      lastName: 'userData',
      displayName: 'userData',
      location: '',
      avatar: '',
    };

    jest.spyOn(API, 'getTeamOverview').mockResolvedValueOnce(teamOverview);
    jest
      .spyOn(API, 'getUserData')
      .mockImplementation(
        async id =>
          await Promise.resolve(id === '2' ? userData : { ...userData, id }),
      );

    render(<TeamOverview />);

    await waitFor(() => {
      expect(API.getTeamOverview).toHaveBeenCalledWith('1');
      expect(
        screen.queryAllByText(`${userData.firstName} ${userData.lastName}`),
      ).toHaveLength(4);

      expect(teamOverview.teamLeadId).toEqual('2');
      expect(teamOverview.teamMemberIds).toEqual(['3', '4', '5']);
    });
  });
});
