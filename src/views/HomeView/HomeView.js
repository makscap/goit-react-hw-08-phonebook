import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <>
      <h1 className={s.text}>
        Welcome to your Phonebook!
      </h1>
      <img
        src="https://www.clipartkey.com/mpngs/m/73-739954_clip-art-diverse-cartoon-group-of-people-illustration.png"
        alt="people"
        className={s.image}
      />
    </>
  );
}
