import React from 'react';

import styles from './JogsList.module.scss';
import { JogsListProps } from './type';

import { JogTile } from 'components/JogTile/JogTile';
import { useNavigate } from 'react-router-dom';
import { deleteJog } from 'services/jogsService';

export const JogsList = ({ jogs, setJogs }: JogsListProps) => {
  const navigate = useNavigate();
  const handleChange = (id: string) => {
    navigate(`/jogs/update/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteJog(id);
      setJogs((prevJogs) => prevJogs.filter((jog) => jog.id !== id));
    } catch (e) {
      console.log(e);
      alert('Error deleting jog');
    }
  };

  return (
    <div className={styles.listWrapper}>
      {jogs.map((jog) => (
        <JogTile
          key={jog.id}
          jog={jog}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
