CREATE DEFINER=`root`@`localhost` PROCEDURE `AddToCart`(
IN customer_id INT,
IN product_id1 INT,
IN product_quantity INT)
BEGIN
DECLARE cart_id1 INT;
DECLARE is_product_present INT;

select id into cart_id1 from cart where c_id = customer_id;

    if cart_id1 is NULL then
        insert into cart (c_id) values (customer_id);
        set cart_id1 = LAST_INSERT_ID();
    end if;

	select count(*) into is_product_present from cart_items where product_id = product_id1 and cart_id =  cart_id1;

	if is_product_present = 1 then
        update cart_items set quantity = quantity + product_quantity where cart_id = cart_id1 and product_id = product_id1;
    ELSE
	BEGIN 
    insert into cart_items (cart_id, product_id,quantity) values (cart_id1, product_id1,product_quantity);
    END;
    END IF;
    set is_product_present = 0;
END