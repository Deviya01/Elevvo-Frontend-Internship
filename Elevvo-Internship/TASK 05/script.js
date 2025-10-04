const posts = [
  {
    title: "Tech Trends 2025",
    category: "Tech",
    img: "https://images.unsplash.com/photo-1581091870620-697d3cf93fb3?auto=format&fit=crop&w=800&q=60",
    date: "Sept 10, 2025",
    desc: "Latest innovations in the tech world."
  },
  {
    title: "Exploring Hunza Valley",
    category: "Travel",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    date: "Sept 15, 2025",
    desc: "A travel diary of beautiful Hunza valley."
  },
  {
    title: "Healthy Food Hacks",
    category: "Food",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    date: "Sept 18, 2025",
    desc: "Quick and healthy meals you can make at home."
  },
  {
    title: "NextJS vs React",
    category: "Tech",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=60",
    date: "Sept 20, 2025",
    desc: "Comparing performance and developer experience."
  },
  {
    title: "Street Food in Lahore",
    category: "Food",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60",
    date: "Sept 21, 2025",
    desc: "Best street food spots to try this season."
  },
  {
    title: "Budget Trip to Skardu",
    category: "Travel",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    date: "Sept 22, 2025",
    desc: "Tips for exploring Skardu on a budget."
  }
];

const blogContainer = document.getElementById('blogContainer');
const pagination = document.getElementById('pagination');
const catButtons = document.querySelectorAll('.cat-btn');
const searchInput = document.getElementById('searchInput');

let activeCategory = 'All';
let searchText = '';
let currentPage = 1;
const postsPerPage = 4;

function renderPosts() {
  const filtered = posts.filter(post => {
    const matchCat = activeCategory === 'All' || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchText.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  if (currentPage > totalPages) currentPage = 1;
  const start = (currentPage - 1) * postsPerPage;
  const visible = filtered.slice(start, start + postsPerPage);

  blogContainer.innerHTML = visible.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.title}">
      <div class="card-body">
        <h2 class="card-title">${p.title}</h2>
        <p class="card-meta">${p.date} • ${p.category}</p>
        <p class="card-desc">${p.desc}</p>
      </div>
    </div>
  `).join('');

  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
    btn.addEventListener('click', () => { currentPage = i; renderPosts(); });
    pagination.appendChild(btn);
  }
}

catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    currentPage = 1;
    renderPosts();
  });
});

searchInput.addEventListener('input', e => {
  searchText = e.target.value;
  currentPage = 1;
  renderPosts();
});

renderPosts();
