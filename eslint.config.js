import vuetify from 'eslint-config-vuetify'

export default [
  ...vuetify({
    ts: true,
  }),
  {
    rules: {
      // Reglas para variables no utilizadas
      'no-unused-vars': 'off', // Desactivar la regla nativa de JS
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      
      // Reglas para placeholders/comentarios pendientes
      'no-warning-comments': ['warn', {
        terms: ['todo', 'fixme', 'xxx', 'placeholder'],
        location: 'anywhere',
      }],
      
      // Reglas para código muerto
      '@typescript-eslint/no-unused-expressions': 'error',
      'no-unused-expressions': 'off',
      
      // Para detectar console.log en producción (opcional)
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      
      // Para detectar debugger
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  },
]