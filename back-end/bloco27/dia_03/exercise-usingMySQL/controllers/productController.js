const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('products/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
});

router.post('products/', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const newProduct = await ProductModel.add(name, brand);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('products/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/products/:id', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
