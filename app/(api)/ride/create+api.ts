import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      origin_address,
      origin_latitude,
      origin_longitude,
      fare_price,
      payment_status,
      driver_id,
      user_id,
    } = body;

    if (
      !origin_address ||
      !origin_latitude ||
      !origin_longitude ||
      !fare_price ||
      !payment_status ||
      !driver_id ||
      !user_id
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 },
      );
    }

    const sql = neon(`${process.env.DATABASE_URL}`);

    const response = await sql`
      INSERT INTO rides ( 
          origin_address, 
          origin_latitude, 
          origin_longitude, 
          fare_price, 
          payment_status, 
          driver_id, 
          user_id
      ) VALUES (
          ${origin_address},
          ${origin_latitude},
          ${origin_longitude},
          ${fare_price},
          ${payment_status},
          ${driver_id},
          ${user_id}
      )
      RETURNING *;
    `;

    return new Response(JSON.stringify({ data: response[0] }), { status: 201 });
  } catch (error) {
    console.error("Error inserting data into rides:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
