CREATE DEFINER=`root`@`localhost` PROCEDURE `AddToCart`(
    IN user_id1 BIGINT,
    IN product_id1 INT,
    IN product_quantity INT
    )
BEGIN
DECLARE cart_id1 INT;
    DECLARE is_product_present INT;

SELECT 
    id
INTO cart_id1 FROM
    cart
WHERE
    user_id = user_id1;

    IF cart_id1 IS NULL THEN
        INSERT INTO cart (user_id) VALUES (user_id1);
        SET cart_id1 = LAST_INSERT_ID();
    END IF;

SELECT 
    COUNT(*)
INTO is_product_present FROM
    cart_items
WHERE
    product_id = product_id1
        AND cart_id = cart_id1;

    IF is_product_present = 1 THEN
        UPDATE cart_items SET quantity = quantity + product_quantity WHERE cart_id = cart_id1 AND product_id = product_id1;
    ELSE
        INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (cart_id1, product_id1, product_quantity);
    END IF;

    SET is_product_present = 0;
END