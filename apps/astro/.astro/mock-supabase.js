// MoSpark Mock Supabase Client
// Mimics @supabase/supabase-js API surface for prototype demos
// Tables: merchants | merchant_hours | merchant_promotions

const MOCK_DB = {

  merchants: [
    {
      id: 'mer-001',
      merchant_id: 'M4B1234',
      name: 'Phở Hà Nội 79',
      category: 'Quán ăn',
      address: '79 Lý Tự Trọng, P. Bến Thành, Q.1, TP.HCM',
      address_new: '',
      lng: 106.698700,
      lat: 10.773200,
      phone: '028 3822 9933',
      has_oa: true,
      oa_id: 'OA-112233',
      status: 'staging',
      created_at: '2026-01-15T08:00:00Z',
      updated_at: '2026-06-01T10:30:00Z',
    },
    {
      id: 'mer-002',
      merchant_id: 'M4B008821',
      name: 'Tiệm Mì Chú Cao',
      category: 'Quán ăn',
      address: '56 Nguyễn Trãi, P.3, Q.5, TP.HCM',
      address_new: '',
      lng: 106.681803,
      lat: 10.759624,
      phone: '0909 123 456',
      has_oa: true,
      oa_id: 'OA-982104',
      status: 'live',
      created_at: '2026-02-10T09:00:00Z',
      updated_at: '2026-05-20T14:15:00Z',
    },
    {
      id: 'mer-003',
      merchant_id: 'M4B005512',
      name: 'Highlands Coffee Bitexco',
      category: 'Cafe',
      address: '2 Hải Triều, P. Bến Nghé, Q.1, TP.HCM',
      address_new: '',
      lng: 106.704618,
      lat: 10.771600,
      phone: '028 3914 1514',
      has_oa: true,
      oa_id: 'OA-771202',
      status: 'live',
      created_at: '2026-01-20T07:30:00Z',
      updated_at: '2026-06-10T09:00:00Z',
    },
    {
      id: 'mer-004',
      merchant_id: 'M4B003300',
      name: 'FamilyMart Phan Xích Long',
      category: 'Cửa hàng tiện lợi',
      address: '181 Phan Xích Long, P.2, Q. Phú Nhuận, TP.HCM',
      address_new: 'Phường 2, TP. Hồ Chí Minh (sau sát nhập)',
      lng: 106.684200,
      lat: 10.797100,
      phone: '',
      has_oa: false,
      oa_id: '',
      status: 'staging',
      created_at: '2026-03-05T11:00:00Z',
      updated_at: '2026-03-05T11:00:00Z',
    },
  ],

  merchant_hours: [
    // M4B1234 — Phở Hà Nội 79
    { id: 'h-001', merchant_id: 'M4B1234', day: 'T2', open_time: '06:00', close_time: '22:00', is_closed: false },
    { id: 'h-002', merchant_id: 'M4B1234', day: 'T3', open_time: '06:00', close_time: '22:00', is_closed: false },
    { id: 'h-003', merchant_id: 'M4B1234', day: 'T4', open_time: '06:00', close_time: '22:00', is_closed: false },
    { id: 'h-004', merchant_id: 'M4B1234', day: 'T5', open_time: '06:00', close_time: '22:00', is_closed: false },
    { id: 'h-005', merchant_id: 'M4B1234', day: 'T6', open_time: '06:00', close_time: '23:00', is_closed: false },
    { id: 'h-006', merchant_id: 'M4B1234', day: 'T7', open_time: '07:00', close_time: '23:00', is_closed: false },
    { id: 'h-007', merchant_id: 'M4B1234', day: 'CN', open_time: '07:00', close_time: '21:00', is_closed: false },
    // M4B008821 — Tiệm Mì Chú Cao
    { id: 'h-011', merchant_id: 'M4B008821', day: 'T2', open_time: '07:00', close_time: '22:00', is_closed: false },
    { id: 'h-012', merchant_id: 'M4B008821', day: 'T3', open_time: '07:00', close_time: '22:00', is_closed: false },
    { id: 'h-013', merchant_id: 'M4B008821', day: 'T4', open_time: '07:00', close_time: '22:00', is_closed: false },
    { id: 'h-014', merchant_id: 'M4B008821', day: 'T5', open_time: '07:00', close_time: '22:00', is_closed: false },
    { id: 'h-015', merchant_id: 'M4B008821', day: 'T6', open_time: '07:00', close_time: '22:00', is_closed: false },
    { id: 'h-016', merchant_id: 'M4B008821', day: 'T7', open_time: '07:00', close_time: '22:00', is_closed: false },
    { id: 'h-017', merchant_id: 'M4B008821', day: 'CN', open_time: '07:00', close_time: '22:00', is_closed: false },
    // M4B005512 — Highlands Coffee
    { id: 'h-021', merchant_id: 'M4B005512', day: 'T2', open_time: '07:00', close_time: '22:30', is_closed: false },
    { id: 'h-022', merchant_id: 'M4B005512', day: 'T3', open_time: '07:00', close_time: '22:30', is_closed: false },
    { id: 'h-023', merchant_id: 'M4B005512', day: 'T4', open_time: '07:00', close_time: '22:30', is_closed: false },
    { id: 'h-024', merchant_id: 'M4B005512', day: 'T5', open_time: '07:00', close_time: '22:30', is_closed: false },
    { id: 'h-025', merchant_id: 'M4B005512', day: 'T6', open_time: '07:00', close_time: '23:00', is_closed: false },
    { id: 'h-026', merchant_id: 'M4B005512', day: 'T7', open_time: '07:00', close_time: '23:00', is_closed: false },
    { id: 'h-027', merchant_id: 'M4B005512', day: 'CN', open_time: '08:00', close_time: '22:30', is_closed: false },
    // M4B003300 — FamilyMart
    { id: 'h-031', merchant_id: 'M4B003300', day: 'T2', open_time: '06:00', close_time: '23:59', is_closed: false },
    { id: 'h-032', merchant_id: 'M4B003300', day: 'T3', open_time: '06:00', close_time: '23:59', is_closed: false },
    { id: 'h-033', merchant_id: 'M4B003300', day: 'T4', open_time: '06:00', close_time: '23:59', is_closed: false },
    { id: 'h-034', merchant_id: 'M4B003300', day: 'T5', open_time: '06:00', close_time: '23:59', is_closed: false },
    { id: 'h-035', merchant_id: 'M4B003300', day: 'T6', open_time: '06:00', close_time: '23:59', is_closed: false },
    { id: 'h-036', merchant_id: 'M4B003300', day: 'T7', open_time: '06:00', close_time: '23:59', is_closed: false },
    { id: 'h-037', merchant_id: 'M4B003300', day: 'CN', open_time: '06:00', close_time: '23:59', is_closed: false },
  ],

  merchant_promotions: [
    {
      id: 'promo-001',
      merchant_id: 'M4B1234',
      type: 'cashback',
      value: '10%',
      description: 'Hoàn tiền 10% khi thanh toán qua Ví MoMo',
      min_order: 50000,
      max_cashback: 20000,
      start_date: '2026-06-01',
      end_date: '2026-08-31',
      is_active: true,
    },
    {
      id: 'promo-002',
      merchant_id: 'M4B008821',
      type: 'cashback',
      value: '5%',
      description: 'Hoàn tiền 5% cho mọi đơn thanh toán MoMo',
      min_order: 30000,
      max_cashback: 10000,
      start_date: '2026-05-01',
      end_date: '2026-07-31',
      is_active: true,
    },
    {
      id: 'promo-003',
      merchant_id: 'M4B005512',
      type: 'cashback',
      value: '8%',
      description: 'Hoàn tiền 8% đồ uống khi thanh toán MoMo',
      min_order: 45000,
      max_cashback: 15000,
      start_date: '2026-06-15',
      end_date: '2026-09-15',
      is_active: true,
    },
  ],

};

// ── Query Builder ─────────────────────────────────────────────────────────────

class SupabaseQueryBuilder {
  constructor(db, table) {
    this._db    = db;
    this._table = table;
    this._op      = 'select';
    this._filters = [];
    this._single  = false;
    this._payload = null;
  }

  select()       { this._op = 'select';  return this; }
  insert(data)   { this._op = 'insert';  this._payload = data; return this; }
  update(data)   { this._op = 'update';  this._payload = data; return this; }
  upsert(data)   { this._op = 'upsert';  this._payload = data; return this; }
  delete()       { this._op = 'delete';  return this; }
  order()        { return this; } // pre-sorted in seed data
  single()       { this._single = true;  return this; }

  eq(col, val)   { this._filters.push([col, val]); return this; }

  // Thenable — resolves like a real Supabase query
  then(resolve, reject) { return this._execute().then(resolve, reject); }

  _match(row) {
    return this._filters.every(([col, val]) =>
      String(row[col] ?? '').toUpperCase() === String(val ?? '').toUpperCase()
    );
  }

  async _execute() {
    // Simulate network latency
    await new Promise(r => setTimeout(r, 120 + Math.random() * 160));

    const rows = this._db[this._table];
    if (!rows) return { data: null, error: { message: `Table "${this._table}" not found` } };

    try {
      // SELECT
      if (this._op === 'select') {
        const result = rows.filter(r => this._match(r));
        if (this._single) {
          return result.length
            ? { data: result[0], error: null }
            : { data: null, error: { code: 'PGRST116', message: 'No rows found' } };
        }
        return { data: result, error: null };
      }

      // UPSERT — find by merchant_id or id, update or insert
      if (this._op === 'upsert') {
        const records = Array.isArray(this._payload) ? this._payload : [this._payload];
        const out = [];
        const ts = new Date().toISOString();
        for (const rec of records) {
          const key = 'merchant_id' in rec ? 'merchant_id' : 'id';
          const idx = rows.findIndex(r =>
            String(r[key] ?? '').toUpperCase() === String(rec[key] ?? '').toUpperCase()
          );
          if (idx >= 0) {
            rows[idx] = { ...rows[idx], ...rec, updated_at: ts };
            out.push(rows[idx]);
          } else {
            const newRow = { id: 'uuid-' + Math.random().toString(36).slice(2,10), created_at: ts, updated_at: ts, ...rec };
            rows.push(newRow);
            out.push(newRow);
          }
        }
        return { data: this._single ? (out[0] ?? null) : out, error: null };
      }

      // INSERT
      if (this._op === 'insert') {
        const records = Array.isArray(this._payload) ? this._payload : [this._payload];
        const ts = new Date().toISOString();
        const out = records.map(r => ({ id: 'uuid-' + Math.random().toString(36).slice(2,10), created_at: ts, updated_at: ts, ...r }));
        rows.push(...out);
        return { data: this._single ? (out[0] ?? null) : out, error: null };
      }

      // UPDATE
      if (this._op === 'update') {
        const ts = new Date().toISOString();
        const out = [];
        for (let i = 0; i < rows.length; i++) {
          if (this._match(rows[i])) {
            rows[i] = { ...rows[i], ...this._payload, updated_at: ts };
            out.push(rows[i]);
          }
        }
        return { data: this._single ? (out[0] ?? null) : out, error: null };
      }

      // DELETE
      if (this._op === 'delete') {
        const deleted = rows.filter(r => this._match(r));
        this._db[this._table] = rows.filter(r => !this._match(r));
        return { data: deleted, error: null };
      }

    } catch (e) {
      return { data: null, error: { message: e.message } };
    }

    return { data: null, error: { message: 'Unknown operation' } };
  }
}

// ── Public API ────────────────────────────────────────────────────────────────

window.supabase = {
  from: (table) => new SupabaseQueryBuilder(MOCK_DB, table),
  _db: MOCK_DB, // expose for debugging
};
