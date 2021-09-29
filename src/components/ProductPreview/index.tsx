import './index.css';
import Product from '../../types/Product';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import { useEffect } from 'react';

interface ProductPreviewProps {
  product: Product;
}

/**
 * Product preview elements
 * @returns ProductPreview UI elements
 */
const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  let listPrice = 0.0;
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0] !== undefined
  ) {
    listPrice = product.childSkus[0].listPrice;
  }

  let salePrice;
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0] !== undefined
  ) {
    salePrice = product.childSkus[0].salePrice;
  }

  let mediumImageUrl = '';
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0] !== undefined
  ) {
    mediumImageUrl = product.childSkus[0].mediumImageUrl;
  }

  return (
    <Grid item xs={4} className="productPreview">
      <Card className="productCard">
        <CardContent>
          <Paper className="mediumImage">
            <img src={mediumImageUrl} alt={product.name} />
          </Paper>
          <Typography variant="h5" className="productName">
            {product.name}
          </Typography>
          <Typography className="productDescription">
            {product.description}
          </Typography>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Typography
                className={salePrice ? 'dollars crossedout' : 'dollars'}
              >
                {listPrice}
              </Typography>
            </Grid>
            {salePrice ? (
              <Grid item xs={6}>
                <Typography className="dollars sale">{salePrice}</Typography>
              </Grid>
            ) : null}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductPreview;
