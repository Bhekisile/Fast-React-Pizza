import { formatCurrency } from "../../utils/helpers";
import PropTypes from 'prop-types';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log(ingredients);

  if (isLoadingIngredients){
    console.log('Loading...');
  }

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  ingredients: PropTypes.string.isRequired,
  isLoadingIngredients: PropTypes.bool.isRequired,
};

export default OrderItem;
