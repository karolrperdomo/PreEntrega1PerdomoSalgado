/**
 * @description Reexporta todos los elementos exportados por el módulo 'productsService'.
 *
 * Este código permite acceder a todos los elementos exportados desde 'productsService'
 * utilizando la misma nomenclatura en el módulo que importa esta exportación.
 * Esto simplifica la importación de funciones y objetos desde 'productsService'.
 *
 * Ejemplo de uso:
 *   import { getProductById, getProducts } from './services';
 *   // Ahora getProductById y getProducts están disponibles en este módulo.
 */
export * from './productsService';
