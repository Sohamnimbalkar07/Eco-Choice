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
        SET cart_id1 = LAST_INSERT_ID();
    end if;

	SELECT COUNT(*) INTO is_product_present FROM cart_items WHERE product_id = product_id1 AND cart_id =  cart_id1;

	IF is_product_present = 1 THEN
        UPDATE cart_items SET quantity = quantity + product_quantity WHERE cart_id = cart_id1 and product_id = product_id1;
    ELSE
	BEGIN 
    insert into cart_items (cart_id, product_id,quantity) values (cart_id1, product_id1,product_quantity);
    END;
    END IF;
    set is_product_present = 0;
END