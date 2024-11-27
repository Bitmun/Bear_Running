import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { createJog, getJog, updateJog } from 'services/jogsService';
import { Jog } from 'services/type';

export const JogForm = () => {
  const { id } = useParams<{ id: string }>();
  const [distance, setDistance] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [isLoading, setIsLoading] = useState<boolean>(!!id);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getJog(id)
        .then((jog: Jog) => {
          const { distance, time, date } = jog;
          setDistance(distance);
          setTime(time);
          setDate(date.split('T')[0]);
        })
        .catch(() => {
          alert('Error fetching jog data');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  const handleSave = async () => {
    try {
      if (distance <= 0 || time <= 0 || !date) {
        alert('All values must be, and be > 0');
        return;
      }

      console.log(date);

      const formattedDate = new Date(date).toISOString();

      if (id) {
        await updateJog(id, { distance, time, date: formattedDate });
      } else {
        await createJog({ distance, time, date: formattedDate });
      }

      navigate('/');
    } catch (e) {
      console.log(e);
      alert('Error while processing form');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <form>
        <div>
          <label>
            Distance:
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              min="0"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              min="0"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};
