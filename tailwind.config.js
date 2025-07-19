module.exports = {
    theme: {
      extend: {
        animation: {
          gradientShift: 'gradientShift 8s ease infinite',
          scroll: 'scroll 1.5s infinite',
        },
        keyframes: {
          gradientShift: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          scroll: {
            '0%': { transform: 'translateY(-8px)' },
            '100%': { transform: 'translateY(8px)' },
          },
            extend: {
            backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            backdropBlur: {
              xs: '2px',
            }
          }

        }
      }
    }
  }