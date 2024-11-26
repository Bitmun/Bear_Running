import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { createJog } from 'services/jogsService';

export const CreateJog = () => {
  const [distance, setDistance] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      if (distance <= 0 || time <= 0) {
        alert('All values must be > 0');
        return;
      }

      const date = new Date().toISOString();

      await createJog({ distance, time, date });
      navigate('/');
    } catch (e) {
      console.log(e);
      alert('Error while saving');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

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
