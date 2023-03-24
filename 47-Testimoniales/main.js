const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Arthuro Dugarte',
    position: 'Ingeniero de Software',
    photo:
      'https://randomuser.me/api/portraits/men/17.jpg',
    text:
      "Aenean quam justo, aliquet sit amet cursus nec, luctus sit amet risus. Nunc nec massa non lectus convallis dapibus ac et ipsum. Vivamus ante mauris, feugiat ut quam a, fermentum aliquam elit. Sed vel ultricies lectus. Etiam vitae viverra enim, et malesuada neque. Vivamus sagittis est eu sem ultricies faucibus. Mauris porta, massa ac faucibus commodo, lorem ex ultricies dui, aliquam tristique libero sapien in neque. Sed varius.",
  },
  {
    name: 'Tiffany',
    position: 'CEO',
    photo: 'https://randomuser.me/api/portraits/women/69.jpg',
    text:
      'Pellentesque dui magna, volutpat quis nibh nec, luctus pulvinar mauris. In vulputate molestie urna. Nam vel justo ac lorem dictum faucibus in et metus. Phasellus eu vehicula turpis. Sed at dolor non turpis eleifend vulputate. Mauris ut lacus congue, ornare est nec, porttitor tellus. Sed fermentum ligula purus, ac dapibus massa elementum vitae. In non orci sit amet nunc malesuada porttitor. Pellentesque cursus purus eget erat posuere, at dictum dolor congue. Ut ac facilisis ante.',
  },
  {
    name: 'Teresa',
    position: 'Seguridad e Higiene',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Fusce nec ultricies tortor. In sollicitudin consequat metus non lobortis. Donec gravida sodales lacus ultricies tempus. In pharetra velit sed elit aliquet laoreet. Nullam tincidunt imperdiet quam, sollicitudin dignissim dui.",
  },
  {
    name: 'María Perez',
    position: 'Recepcionista',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'José Díaz',
    position: 'Contador',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had my concerns that due to a tightz deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Marta Sanchez',
    position: 'Diseñadora Gráfica',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Martin Sanchez',
    position: 'Esposo de Marta',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)