import { type FC } from 'react';
import useAppContext from '../hooks/use-app-context';

const TopBar: FC = () => {
  const { isFlowValid } = useAppContext();

  const handleSave = () => {
    if (isFlowValid) return alert('Flow saved! 😁');

    alert('Cannot save flow 🥺');
  };

  return (
    <div
      style={{
        gridColumn: '1 / -1',
        backgroundColor: '#fefefe',
        borderBottom: '1px solid #eee',
        padding: '1rem 3rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}>
      <a href='https://aminpainter.com'>See my portfolio</a>
      <p style={{ marginRight: 'auto' }}>
        It is not the language that makes programs appear simple; it's the programmer that makes the
        language appear simple 😉
      </p>
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default TopBar;
