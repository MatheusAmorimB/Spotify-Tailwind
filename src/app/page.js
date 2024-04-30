import {Home as HomeIcon, Search, Library, Plus, Heart, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, MonitorSpeaker, Speaker, Volume, Fullscreen, Maximize2} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex  items-center  gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex  items-center  gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex  items-center  gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-8 gap-3 flex flex-col'>
            <a href='' className=' flex item-center gap-3 text-sm font-semibold text-zinc-200'>
              <Plus className='bg-zinc-600'/>
              Create Playlist
            </a>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Heart />
              Liked Songs
            </a>
          </nav>

          <nav className='mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-zinc-200 text-lg font-semibold'>Minhas Playlist</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Chill Mix</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Insta Hits</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Your Top Songs 2024</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Mellow Songs</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>BG Afro "Select" Vibes</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Happy Hits!</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Deep Focus</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Instrumental Study</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>OST Compilations</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Mixed Feelings</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Nostalgia for old souled mill...</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-5'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/album.jpg" width={104} height={104} alt="Capa album Veigh"/>
              <strong>Veigh - Dos Prédios</strong>
              <button className='p-2 w-12 h-12 rounded-full flex items-center justify-center bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/album.jpg" width={104} height={104} alt="Capa album Veigh"/>
              <strong>Veigh - Dos Prédios</strong>
              <button className='p-2 w-12 h-12 rounded-full flex items-center justify-center bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/album.jpg" width={104} height={104} alt="Capa album Veigh"/>
              <strong>Veigh - Dos Prédios</strong>
              <button className='p-2 w-12 h-12 rounded-full flex items-center justify-center bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/album.jpg" width={104} height={104} alt="Capa album Veigh"/>
              <strong>Veigh - Dos Prédios</strong>
              <button className='p-2 w-12 h-12 rounded-full flex items-center justify-center bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/album.jpg" width={104} height={104} alt="Capa album Veigh"/>
              <strong>Veigh - Dos Prédios</strong>
              <button className='p-2 w-12 h-12 rounded-full flex items-center justify-center bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" width={104} height={104} alt="Capa album Veigh"/>
              <strong>Veigh - Dos Prédios</strong>
              <button className='p-2 w-12 h-12 rounded-full flex items-center justify-center bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Veigh</h2>

          <div className='grid grid-cols-7 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa album Veigh"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Veigh</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa album Veigh"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Veigh</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa album Veigh"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Veigh</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa album Veigh"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Veigh</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa album Veigh"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Veigh</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <img src="/album.jpg" width={56} height={56} alt="Capa album Veigh"/>
          <div className='flex flex-col'>
            <strong className='font-normal'>Novo Balanço</strong>
            <span className='text-xs text-zinc-400'>Veigh</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-400' />
            <SkipBack size={20} className='text-zinc-400' />

            <button className='w-9 h-9 rounded-full flex items-center justify-center pl-0.5 bg-zinc-50 text-black'>
                <Play />
              </button>
            
            <SkipForward size={20} className='text-zinc-400' />
            <Repeat size={20} className='text-zinc-400' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
            </div>
            <span className='text-sm text-zinc-400'>2:14</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={18}/>
          <ListMusic size={20} />
          <MonitorSpeaker size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={22} />
          </div>
          <div className='h-1 bg-zinc-600 rounded-full w-24'>
            <div className='bg-zinc-200 h-1 w-16'></div>
          </div>
          <Maximize2 size={18} />

        </div>
      </footer>
    </div>
  );
}
