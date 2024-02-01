import { formatCurrency } from "../../utils/helpers";
import PropTypes from 'prop-types';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log("ingredients", ingredients);

  if (isLoadingIngredients){
    console.log('Loading...');
  }

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
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
  ingredients: PropTypes.array.isRequired,
  isLoadingIngredients: PropTypes.func,
};

export default OrderItem;
