export const useTheme = () => {
  const theme = useState('theme', () => 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'

    document.documentElement.classList.toggle(
      'dark',
      theme.value === 'dark'
    )

    localStorage.setItem('theme', theme.value)
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light'

    theme.value = savedTheme

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }

  return {
    theme,
    toggleTheme,
    initTheme
  }
}