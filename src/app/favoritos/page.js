import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

async function carregarDados(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/account/9269654/watchlist/movies?language=pt-br&page=1&sort_by=created_at.asc', options)
      const json = await response.json()
      console.log(json)
      return json.results
} 

export default async function Favoritos() {

 const filmes = await carregarDados()

  return (
    <>
      <nav className="flex items-end gap-4 bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Fiap Filmes</h1>
        <a href="/favoritos">Favoritos</a>
      </nav>

      <Titulo>Favoritos</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>
    </>
  )
}
