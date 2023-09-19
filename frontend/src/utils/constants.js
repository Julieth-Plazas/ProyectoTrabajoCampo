export const BASE_URL = "http://localhost:5000/api";
export const EMAIL = "fundaciongeneracionesdepaz1@gmail.com"
export const EMAIL_TEST = 'dairo3rincon@gmail.com'
export const cursosYJuegos = [
    {
        name: 'Jardin',
        games: ['gamecolors2', 'figurasgeometricas2', 'memoria numeros']
    },
    {
        name: 'Transicion',
        games: ['gamsumres1', 'figurasgeometricas1', 'memoria vocales', 'Ingles']
    },{
        name: 'Pre-jardin',
        games: ['gamecolors1', 'memoria animales']
    }
]
    
  
  



  export function buscarJuegosPorCurso(curso) {
    
    curso = curso.charAt(0).toUpperCase() + curso.slice(1).toLowerCase();
  
    let juegos = [];
    for (let i = 0; i < cursosYJuegos.length; i++) {
        console.log(cursosYJuegos[i].name)
      if (cursosYJuegos[i].name === curso) {
        juegos = cursosYJuegos[i].games;
      }
    }
    return juegos;
  }