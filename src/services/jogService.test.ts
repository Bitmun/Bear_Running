import { api } from './api';
import { createJog, deleteJog, getJog, getJogs, updateJog } from './jogsService';

jest.mock('./api', () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('jogsService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches all jogs', async () => {
    const mockJogs = [
      { id: '1', distance: 5, time: 30, date: '2024-11-28T00:00:00Z', speed: 10 },
    ];
    (api.get as jest.Mock).mockResolvedValueOnce({ data: { jogs: mockJogs } });

    const jogs = await getJogs();

    expect(jogs).toEqual(mockJogs);
    expect(api.get).toHaveBeenCalledWith('/jogs');
  });

  it('fetches a single jog by ID', async () => {
    const mockJog = {
      id: '1',
      distance: 5,
      time: 30,
      date: '2024-11-28T00:00:00Z',
      speed: 10,
    };
    (api.get as jest.Mock).mockResolvedValueOnce({ data: { jogs: [mockJog] } });

    const jog = await getJog('1');

    expect(jog).toEqual(mockJog);
    expect(api.get).toHaveBeenCalledWith('/jogs/1');
  });

  it('creates a new jog', async () => {
    const newJog = { time: 30, distance: 5, date: '2024-11-28T00:00:00Z' };
    (api.post as jest.Mock).mockResolvedValueOnce({});

    await createJog(newJog);

    expect(api.post).toHaveBeenCalledWith('/jogs', newJog);
  });

  it('updates an existing jog', async () => {
    const updatedJog = { time: 35, distance: 6, date: '2024-11-29T00:00:00Z' };
    (api.patch as jest.Mock).mockResolvedValueOnce({});

    await updateJog('1', updatedJog);

    expect(api.patch).toHaveBeenCalledWith('/jogs/1', updatedJog);
  });

  it('deletes a jog', async () => {
    (api.delete as jest.Mock).mockResolvedValueOnce({});

    await deleteJog('1');

    expect(api.delete).toHaveBeenCalledWith('/jogs/1');
  });
});
