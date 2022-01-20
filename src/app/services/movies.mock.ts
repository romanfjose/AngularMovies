import { IMovie } from '../models/movie.model';
export const moviesMock: IMovie[] = [
  {
    id: 0,
    title: 'RESIDENT EVIL',
    release: 2012,
    image: '../../assets/residentEvil1.jfif',
    description:
      'A virus turns hundreds of humans and animals at a genetic research facility into flesh-eating zombies. In response, an elite military unit tries to take them down before it is too late.',
  },
  {
    id: 1,
    title: 'WORLD WAR Z',
    release: 2013,
    image: '../../assets/worldwarz.jfif',
    description:
      'Gerry, a former United Nations employee, unexpectedly finds himself in a race against time as he investigates a threatening virus that turns humans into zombies',
  },
  {
    id: 2,
    title: 'ZOMBIELAND',
    release: 2009,
    image: '../../assets/zombieland.jpg',
    description:
      'Is a 2009 American zombie comedy film directed by Ruben Fleischer in his theatrical debut and written by Rhett Reese and Paul Wernick.',
  },
  {
    id: 3,
    title: 'SCOOBY-DOO ON ZOMBIE ISLAND',
    release: 1998,
    image: '../../assets/scoobydoo.jpg',
    description:
      'Scooby-Doo and his gang travel to the distant Moonscar island. But the heavenly paradise has a dark secret, which reveals itself in the form of vicious zombie pirates.',
  },
  {
    id: 4,
    title: 'SHAUN OF THE DEAD',
    release: 2004,
    image: '../../assets/shaunofthedead.jfif',
    description:
      'Shaun is a salesman whose life has no direction. However, his uneventful life takes a sudden turn when he has to singlehandedly deal with an entire community of zombies.',
  },
];
