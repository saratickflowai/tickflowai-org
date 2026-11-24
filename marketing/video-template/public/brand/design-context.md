## Design Context

### Users

TickFlowAI is used by support agents, service teams, tenant admins, and internal operators who need to
move quickly through tickets, service requests, reports, automation rules, integrations, users, roles,
and knowledge-base work. They are usually trying to understand status, spot exceptions, make a safe
change, and get back to work. The interface should help them scan dense operational data without
feeling lost.

### Brand Personality

Calm, capable, and precise. The product should feel like a serious operations tool: trustworthy,
fast, organized, and quietly modern. It should not feel like a landing page, a toy dashboard, or a
decorative analytics demo.

### Aesthetic Direction

Use the existing token system in `TickFlowAI-Frontend/styles/tokens.css` as the single source of
truth. The visual language is restrained and work-focused: compact headers, clear tables, useful
cards, meaningful empty states, visible permission boundaries, and chart colors that explain data
rather than decorate it. Teal is the main brand accent; semantic colors are reserved for real states
such as success, warning, danger, and status. Both light and dark mode matter.

### Design Principles

1. Prioritize scanability over spectacle: make operational facts easy to compare at a glance.
2. Use color only when it carries meaning; never rely on color alone.
3. Keep controls predictable: filters, tables, pagination, modals, and exports should behave the same
   across modules.
4. Design for large tenants: long names, many rows, pagination, loading states, and stale data must be
   handled gracefully.
5. Keep the system maintainable: shared tokens, shared components, and documented patterns should win
   over one-off styling.

